import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  created: {type: Date, default: Date.now}
   //userId: Schema.Types.UUID,
});

const blog = mongoose.model("User", userSchema);

export default user;