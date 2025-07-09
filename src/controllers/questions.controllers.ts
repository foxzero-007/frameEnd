import { Request, Response } from "express";
import { QuestionService } from "../services/questions.services";

export const questionController = {
  async getAllQuestions(req: Request, res: Response) {
    const questions = await QuestionService.getAllQuestions();
    res.json(questions);
  },

  async addNewQuestionAndAnswer(req: Request, res: Response) {
    const { question = "", answer = "" } = req.body;
    if (!question || !answer) {
      res.status(400).json({ success: false, error: "问题和答案不能为空" });
    } else {
      QuestionService.addQuestionAndAnswer(question, answer)
        .then(() => {
          res.send({ success: true });
        })
        .catch((err) => {
          res.status(400).json({ success: false, error: "问题和答案不能为空" });
          console.log(err);
        });
    }
  },
};
