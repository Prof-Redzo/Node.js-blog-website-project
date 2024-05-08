import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: Date,
  updatedAt: Date,
  comments: String,
  createdAt: Date
   //userId: Schema.Types.UUID,
});

const blog = mongoose.model("Blog", blogSchema);

export default blog;