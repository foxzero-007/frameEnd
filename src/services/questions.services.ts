import { Questions } from "../entities";
import { getDataSource } from "../database/mysql";

export const QuestionService = {
  async getAllQuestions() {
    const dataSource = await getDataSource();
    return await dataSource.manager.find(Questions);
  },
};
