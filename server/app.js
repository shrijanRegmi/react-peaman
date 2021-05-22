import express from "express";
import userRouter from "./routes/get/users.js";
import postRouter from "./routes/get/posts.js";
import chatsRouter from "./routes/get/chats.js";
import timelineRouter from "./routes/get/timeline.js";
import cors from 'cors';

const app = express();

app.use(cors());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/chats", chatsRouter);
app.use("/timeline", timelineRouter);
app.use(express.static("../public/"))

app.listen("3001", () => {
  console.log("LISTENING TO 3001");
});
