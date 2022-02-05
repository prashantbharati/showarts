import express from "express";

const router = express.Router();

const postRoutes = router.post("/", async (req, res) => {
  const post = req.body;
  console.log(post);
  // const newPostMessage = new PostMessage({
  //   ...post,
  //   creator: req.userId,
  //   createdAt: new Date().toISOString(),
  // });

  // try {
  //   await newPostMessage.save();

  //   res.status(201).json(newPostMessage);
  // } catch (error) {
  //   res.status(409).json({ message: error.message });
  // }
});

export default postRoutes;
