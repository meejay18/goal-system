import { Document, model, models, Schema } from "mongoose";

interface iGoal {
  title: string;
  duration: string;
  status: string;
}

interface iGoalData extends iGoal, Document {}

const goalModel = new Schema(
  {
    title: {
      type: String,
    },
    duration: {
      type: String,
    },
    status: {
      type: String,
      default: "start",
    },
  },
  { timestamps: true }
);

export default model<iGoalData>("goals", goalModel);
