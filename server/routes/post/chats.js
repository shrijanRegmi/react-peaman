import express from "express";
import admin from "../../configs/firebaseConfig.js";
import { saveDataToDoc, updateDataToDoc } from "../../utils/db_helper.js";

const router = express.Router();
const ref = admin.firestore();

router.post("/:chatId/messages", async (req, res) => {
  const { chatId } = req.params;
  const messageData = req.body;

  try {
    const chatRef = ref.collection("chats").doc(chatId);
    const messagesRef = ref
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .doc();

    await saveDataToDoc(messagesRef, messageData);

    let chatDataToUpdate = {
      last_msg_ref: messagesRef,
      last_updated: admin.firestore.Timestamp.fromDate(new Date()),
    };

    const isFirstUser =
      messageData.senderId.localeCompare(messageData.receiverId) === -1;

    if (isFirstUser) {
      chatDataToUpdate.first_user_unread_messages_count =
        admin.firestore.FieldValue.increment(1);
    } else {
      chatDataToUpdate.second_user_unread_messages_count =
        admin.firestore.FieldValue.increment(1);
    }

    await updateDataToDoc(chatRef, chatDataToUpdate);

    return res.status(200).json({ ...messageData, id: messagesRef.id });
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }
});

export default router;
