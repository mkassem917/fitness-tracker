const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },

    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type!",
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter an exercise name!",
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

exerciseSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Exercise = mongoose.model("Workout", exerciseSchema);
module.exports = Exercise;
