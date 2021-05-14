import express from "express";
import admin from "../../configs/firebaseConfig.js";
import { getDataFromCol } from "../../utils/db_helper.js";

const router = express.Router();
const ref = admin.firestore();

router.get("/", async (req, res) => {
  try {
    const posts = [];
    const { uid, limit } = req.query;

    const timelineRef = ref
      .collection("users")
      .doc(uid)
      .collection("timeline")
      .orderBy("updated_at", "desc")
      .limit(parseInt(limit) || 10);

    const timelineSnap = await timelineRef.get();

    if (!timelineSnap.empty) {
      for (const timelineDoc of timelineSnap.docs) {
        if (timelineDoc.exists) {
          const timelineData = timelineDoc.data();
          const { post_ref } = timelineData;
          const { segments } = post_ref._path;

          const post = await getDataFromCol(
            "posts",
            segments[segments.length - 1]
          );

          if (post) {
            posts.push(post);
          }
        }
      }
    }

    return res.status(200).send(posts);
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { uid } = req.query;

    const timelineRef = ref
      .collection("users")
      .doc(uid)
      .collection("timeline")
      .doc(id);

    const timelineSnap = await timelineRef.get();

    if (timelineSnap.exists) {
      const timelineData = timelineSnap.data();
      const { post_ref } = timelineData;
      const { segments } = post_ref._path;

      const post = await getDataFromCol("posts", segments[segments.length - 1]);

      if (post) {
        console.log(post);
        return res.status(200).send(post);
      }
      return res.status(404).send("Timeline post not found");
    }
  } catch ({ message }) {
    return res.status(400).send(message);
  }
});

export default router;
