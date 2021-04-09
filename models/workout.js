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
          default: 0
        },
        weight: {
          type: Number,
          default: 0
        },
        reps: {
          type: Number,
          default: 0
        },
        sets: {
          type: Number,
          default: 0
        },
        distance: {
          type: Number,
          default: 0
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
