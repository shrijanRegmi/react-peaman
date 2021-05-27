import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

// get routes start
import userRouter from "./routes/get/users.js";
import postRouter from "./routes/get/posts.js";
import chatsRouter from "./routes/get/chats.js";
import timelineRouter from "./routes/get/timeline.js";
import searchRouter from "./routes/get/search.js";
// get routes end

// post routes start
import authRouter from "./routes/post/auth.js";
import chatsPostRouter from "./routes/post/chats.js";
// post routes end

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/search", searchRouter);
app.use("/posts", postRouter);
app.use("/chats", chatsRouter, chatsPostRouter);
app.use("/timeline", timelineRouter);
app.use(express.static("../public/"));

app.listen("3001", () => {
  console.log("LISTENING TO 3001");
});
