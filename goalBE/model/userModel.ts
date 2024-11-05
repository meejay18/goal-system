import { Document, model, Schema } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
