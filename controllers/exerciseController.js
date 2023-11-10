const express = require("express");
const workout_tb = express.Router();
const { getAllExercises, getExercise, createFitness, deleteFitness, updateFitness } = require("../queries/fitness.js");
const { checkName, checkDays } = require('../validations/checkFitness.js')

// GET all exercises
workout_tb.get("/", async (req, res) => {
    const allExcercises = await getAllExercises();
    if(allExercises[0]) {
        res.status(200).json(allExercises);
    } else {
        res.status(500).json({ error: "server error"});
    }
});

// GET one exercise / SHOW
// localhost:3300/:id
workout_tb.get("/:id", async (req, res) => {
    const { id } = req.params; //convert id to a #
    const oneExercise = await getExercise(id);
    if (oneExercise) {
        res.json(oneExercise);
    } else {
        res.json(404).json({ error: "Not Found"});
    }
});

// POST a new exercise / CREATE
// localhost:/exercise/
// fitness_db.post("/", checkName, checkDays, async (req, res) => {
//     const body = req.body;
//     const exercise = await createExercise(body);
//     res.status(200).json(exercise);
// });





module.exports = workout_tb;