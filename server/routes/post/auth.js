import express from "express";
import admin from "../../configs/firebaseConfig.js";
import { getDataFromCol } from "../../utils/db_helper.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { id_token } = req.body;
  try {
    const { uid } = await admin.auth().verifyIdToken(id_token);
    const userData = await getDataFromCol("users", uid);
    return res.status(200).json(userData);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

export default router;
