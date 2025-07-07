import "reflect-metadata";
import express from "express";
import questionRoutes from "./routes/questions.routers";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/questions", questionRoutes);

app.listen(port, () => {
  console.log(`Example app listening111 on port ${port}`);
});
