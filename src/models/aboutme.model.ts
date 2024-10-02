import mongoose, { Document, Schema } from "mongoose";

export interface IAboutme extends Document {
  name: string;
  description: string;
  avatar: string;
}

const AboutMeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    titles: {
        type: [String],
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    profile1: {
      type: String,
      required: true
    },
    profile2: {
        type: String,
    }
  },
  {timestamps: true}
);

export const AboutMe = mongoose.models.Aboutme || mongoose.model<IAboutme>("Aboutme", AboutMeSchema);