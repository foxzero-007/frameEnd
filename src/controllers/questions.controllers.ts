import { Request, Response } from "express";
import { QuestionService } from "../services/questions.services";

export const questionController = {
  async getAllQuestions(req: Request, res: Response) {
    const questions = await QuestionService.getAllQuestions();
    res.json(questions);
  },
};
