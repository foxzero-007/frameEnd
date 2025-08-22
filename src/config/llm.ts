import { OpenAI } from "openai";

let client: any = null;

const getLLMClient = () => {
  if (!client) {
    client = new OpenAI({
      baseURL: "https://api.siliconflow.cn/v1",
      apiKey: "sk-yqpkehzywjtchkzwclkxhyaytzhzplwmqgcxittprkjdbrrd",
    });
    console.log("✅ LLM Client Initialized");
  }
  return client as OpenAI;
};

export { getLLMClient };
