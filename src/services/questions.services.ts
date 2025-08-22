import { Questions } from "../entities";
import { getDataSource } from "../database/mysql";
import { getNewUuid } from "../util";

export const QuestionService = {
  async getAllQuestions() {
    const dataSource = await getDataSource();
    return await dataSource.manager.find(Questions);
  },

  async getQuestionsById(uuid: string) {},

  async addQuestionAndAnswer(question: string, answer: string) {
    const questionItem = new Questions();
    const dataSource = await getDataSource();
    questionItem.question = question;
    questionItem.answer = answer;
    const uuid = getNewUuid();
    console.log(uuid);
    questionItem.uuid = uuid;
    return await dataSource.manager.insert(Questions, questionItem);
  },

  async updateQuestionById(uuid: number, newAnswer: string) {},
};
