import express from "express";
import admin from "../../configs/firebaseConfig.js";
import { getListFromRef } from "../../utils/db_helper.js";

const router = express.Router();
const ref = admin.firestore();

router.get("/", async (req, res) => {
  try {
    const { keyword, limit } = req.query;

    const usersRef = ref
      .collection("users")
      .limit(parseInt(limit) || 10)
      .where("search_keys", "array-contains", keyword.toUpperCase());

    const users = await getListFromRef(usersRef);

    return res.status(200).json({ users });
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }
});

export default router;
