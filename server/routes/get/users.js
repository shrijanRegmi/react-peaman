import express from "express";
import admin from "../../configs/firebaseConfig.js";
import { getDataFromCol } from "../../utils/db_helper.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = [];

    const { limit } = req.query;
    const ref = admin.firestore();

    const usersSnap = await ref
      .collection("users")
      .limit(parseInt(limit) || 10)
      .get();
    if (!usersSnap.empty) {
      for (const userDoc of usersSnap.docs) {
        if (userDoc.exists) {
          const userData = userDoc.data();
          users.push(userData);
        }
      }
    }

    console.log(users);
    return res.status(200).send(users);
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await getDataFromCol("users", uid);

    if (user) {
      return res.status(200).send(user);
    }
    return res.status(404).send("User not found");
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default router;
