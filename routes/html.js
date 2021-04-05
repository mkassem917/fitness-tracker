// Dependencies
const path = require("path");
const router = require("express").Router();

//Main Homepage html page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

//Route to the exercise html page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Route to the stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;