import express from "express";
import admin from "../../configs/firebaseConfig.js";
import { getDataFromCol } from "../../utils/db_helper.js";

const ref = admin.firestore();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const posts = [];
    const postsRef = ref
      .collection("posts")
      .limit(parseInt(limit) || 10)
      .orderBy("updated_at", "desc");
    const postsSnap = await postsRef.get();

    if (!postsSnap.empty) {
      for (const postDoc of postsSnap.docs) {
        if (postDoc.exists) {
          const postData = postDoc.data();
          posts.push(postData);
        }
      }
    }

    console.log(posts);
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await getDataFromCol("posts", id);

    if (post) {
      console.log(post);
      return res.status(200).send(post);
    }
    return res.status(404).send("Post not found");
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

export default router;
