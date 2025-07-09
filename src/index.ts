import "reflect-metadata";
import express from "express";
import questionRoutes from "./routes/questions.routers";
import multer from "multer";

const app = express();
const port = 3000;

// 创建 multer 实例：文件存储到 uploads 目录
const upload = multer({ dest: "uploads/" });

// 全局注册中间件，接收所有 multipart/form-data 类型的请求
app.use((req, res, next) => {
  const contentType = req.headers["content-type"] || "";
  if (contentType.startsWith("multipart/form-data")) {
    upload.any()(req, res, next); // 处理任意 form-data 字段
  } else {
    next();
  }
});

app.use(express.json());

// 解析 application/x-www-form-urlencoded 类型的数据
app.use(express.urlencoded({ extended: true }));

app.use("/questions", questionRoutes);

app.listen(port, () => {
  console.log(`Example app listening111 on port ${port}`);
});
