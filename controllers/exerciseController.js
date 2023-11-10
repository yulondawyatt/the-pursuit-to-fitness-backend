const express = require("express");
const workout_tb = express.Router();
const { getAllExercises, getExercise, createFitness, deleteFitness, updateFitness } = require("../queries/fitness.js");
const { checkName, checkDays } = require('../validations/checkFitness.js')

// GET all exercises
workout_tb.get("/", async (req, res) => {
    const allExcercises = await getAllExercises(req.query);
    if(allExcercises[0]) {
        res.status(200).json(allExcercises);
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
workout_tb.post("/", checkName, checkDays, async (req, res) => {
    const body = req.body;
    const exercise = await createFitness(body);
    res.status(200).json(exercise);
});

workout_tb.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedExcercise = await deleteFitness(id);
    res.status(200).json(deletedExcercise)
})

workout_tb.put("/:id", checkName, checkDays, async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedExercise = await updateFitness(id, body);
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = workout_tb;