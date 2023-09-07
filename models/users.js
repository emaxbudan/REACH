import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },

    photo: {
      type: String,
    },
    location: {
      type: String,
    },
    date: {
      type: Date,
    },
    role: {
      type: String,
      default: "user",
      enum: ["Admin", "user"],
    },
  },
  { timestamps: true }
)


export default mongoose.model("users", userSchema);

