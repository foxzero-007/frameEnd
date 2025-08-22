import { getLLMClient } from "../config/llm";

const getQuestionAnswerStream = async (question: any) => {
  const llmClient = getLLMClient();
  const responseStream = await llmClient.chat.completions.create({
    model: "deepseek-ai/DeepSeek-R1-0528-Qwen3-8B",
    messages: [
      {
        role: "user",
        content: `请你从专业前端程序员的角度回答这个问题：${question}`,
      },
    ],
    stream: true,
  });
  console.log(responseStream);
  return responseStream;
};

export { getQuestionAnswerStream };
