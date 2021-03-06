//Requiring Router and workout.js file from Models
const router = require("express").Router();
const db = require("../models");

//Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find().then(
    ((dbWorkout) => {
      res.json(dbWorkout);
    }).catch((err) => {
      res.status(400).json(err);
    })
  );
});

//Add New Workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Getting Duration of Workout (Range)
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Posting Duration (Range)
router.post("/api/workouts/range", (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Workout by id
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },

      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
