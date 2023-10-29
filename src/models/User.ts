import mongoose from "mongoose";
import { randomUUID } from "crypto";

const chatSchema = new mongoose.Schema({
  id:{
    type: String,
    default: randomUUID(),
  },
  // role would be the assistant of the user
  role: { 
    type: String,
    required: true,
  },
  // content is the message property of the user
  content: {
    type: String,
    required: true,
  },
});
const userSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
 },
 email: {
    type: String,
    required: true,
    unique: true,
 },
 password: {
    type: String,
    required: true,
 },
 // chats would be the schema
 chats: [chatSchema],
});
//It only have single instance so there won't be an issue
export default mongoose.model("User", userSchema);