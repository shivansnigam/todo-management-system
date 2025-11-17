import mongoose from "mongoose";

let todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: "",
      trim: true
    },
    priority: {
      type: String,
      enum: ["low", "normal", "high"],
      default: "normal"
    },
    deadline: {
      type: Date
    },
    tags: {
      type: [String],
      default: []
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

let Todo = mongoose.model("Todo", todoSchema);

export default Todo;
