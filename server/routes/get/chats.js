import express from "express";
import admin from "../../configs/firebaseConfig.js";
import {
  getDataFromCol,
  getDataFromPath,
  getListFromRef,
} from "../../utils/db_helper.js";

const router = express.Router();
const ref = admin.firestore();

router.get("/", async (req, res) => {
  try {
    const { uid, limit } = req.query;
    const chatsRef = ref
      .collection("chats")
      .where("users", "array-contains", uid)
      .orderBy("last_updated", "desc")
      .limit(parseInt(limit) || 10);

    const chatsFromCol = await getListFromRef(chatsRef);

    const chats = [];

    for (const chat of chatsFromCol) {
      const friendId = chat.users.filter((itm) => itm != uid)[0];
      const { _path } = chat.last_msg_ref;
      const { segments } = _path;
      const lastMsgPath = segments.join("/");

      const last_message = await getDataFromPath(lastMsgPath);
      const friend = await getDataFromCol("users", friendId);
      chats.push({ ...chat, friend, last_message });
    }

    console.log(chats);
    return res.status(200).send(chats);
  } catch ({ message }) {
    return res.status(403).send(message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const chat = await getDataFromCol("chats", id);

    if (chat) {
      console.log(chat);
      return res.status(200).send(chat);
    }

    return res.status(404).send("Chat not found");
  } catch ({ message }) {
    return res.status(403).send(message);
  }
});

router.get("/:chatId/messages", async (req, res) => {
  try {
    const { chatId } = req.params;
    const { limit } = req.query;

    const messagesRef = ref
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("milliseconds", "desc")
      .limit(parseInt(limit) || 10);

    const messages = await getListFromRef(messagesRef);
    return res.status(200).send(messages);
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

router.get("/:chatId/messages/:id", async (req, res) => {
  try {
    const { chatId, id } = req.params;

    const messageRef = ref
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .doc(id);

    const messageSnap = await messageRef.get();

    if (messageSnap.exists) {
      const messageData = messageSnap.data();
      return res.status(200).send(messageData);
    }

    return res.status(404).send("Message not found");

    return res.status(200).send(messages);
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

export default router;
