import { Router } from "express";
import { questionController } from "../controllers/questions.controllers";

const router = Router();

router.get("/listAllQuestions", questionController.getAllQuestions);
router.post(
  "/addNewQuestionAndAnswer",
  questionController.addNewQuestionAndAnswer
);

export default router;
