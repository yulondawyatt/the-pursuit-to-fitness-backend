const express = require("express");
const fitness_db = express.Router;
const { getAllFitness, getFitness, createFitness, deleteFitness, updateFitness } = require("../queries/fitness.js");
const { checkName, checkBoolean } = require('/..validations/checkFitness.js')

// GET all exercises LONDA
fitness_db.get("/", async (req, res) => {
    const allFitness = await getAllFitness();
    if(allFitness[0]) {
        res.status(200).json(allFitness);
    } else {
        res.status(500).json({ error: "server error"});
    }
});

// GET one exercise / SHOW
// localhost:3300/:id
fitness_db.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneExercise = await getFitness(id);
    if (oneExercise) {
        res.json(oneExercise);
    } else {
        res.json(404).json({ error: "Not Found"});
    }
});

// POST a new exercise / CREATE
// localhost:/exercise/
fitness_db.post("/", checkName, checkBoolean, async (req, res) => {
    const body = req.body;
    const exercise = await createExercise(body);
    res.status(200).json(exercise);
});





module.exports = fitness_db;