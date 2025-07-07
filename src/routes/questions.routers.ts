import { Router } from "express";
import { questionController } from "../controllers/questions.controllers";

const router = Router();

router.get("/", questionController.getAllQuestions);

export default router;
