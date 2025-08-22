import { Request, Response } from "express";
import { QuestionService } from "../services/questions.services";
import { getQuestionAnswerStream } from "../agent/questionAnswer";

export const questionController = {
  async getAllQuestions(req: Request, res: Response) {
    const questions = await QuestionService.getAllQuestions();
    res.json(questions);
  },

  async addNewQuestionAndAnswer(req: Request, res: Response) {
    const { question = "" } = req.body;
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    const answerStream = await getQuestionAnswerStream(question);
    let fullReply = "";
    console.log(answerStream);

    if (!question || !answerStream) {
      res.status(400).json({ success: false, error: "问题和答案不能为空" });
    } else {
      for await (const chunk of answerStream) {
        const delta = chunk.choices[0]?.delta?.content || "";
        if (delta) {
          fullReply += delta;
          res.write(`data: ${delta}\n\n`);
        }

        if (chunk.choices[0]?.finish_reason) {
          QuestionService.addQuestionAndAnswer(question, fullReply)
            .then(() => {
              res.write("data: [DONE]\n\n");
            })
            .catch((err) => {
              res
                .status(400)
                .json({ success: false, error: "问题和答案不能为空" });
              console.log(err);
            });
        }
      }
    }
  },
};
