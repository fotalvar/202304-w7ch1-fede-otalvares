import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    min: 8,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("User", userSchema, "users");
