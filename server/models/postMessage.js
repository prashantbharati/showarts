import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
