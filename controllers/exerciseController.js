const express = require("express");
const workout_tb = express.Router();
const {
  getAllExercises,
  getExercise,
  createFitness,
  deleteFitness,
  updateFitness,
  updateCompletionStatus,
} = require("../queries/fitness.js");
const { checkName, checkDays } = require("../validations/checkFitness.js");

// GET all exercises
workout_tb.get("/", async (req, res) => {
  const allExcercises = await getAllExercises(req.query);
  if (allExcercises[0]) {
    res.status(200).json(allExcercises);
  } else {
    res.status(500).json({ error: "server error" });
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
    res.json(404).json({ error: "Not Found" });
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
  res.status(200).json(deletedExcercise);
});

workout_tb.put("/:id", checkName, checkDays, async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedExercise = await updateFitness(id, body);
    res.status(200).json(updatedExercise);
  } catch (error) {
    console.error("Error updating fitness entry:", error);
    res.status(500).json({ error: error.message });
  }
});

workout_tb.put("/:id/completion", async (req, res) => {
  const { id } = req.params;
  try {
    const fitnessEntry = await getExercise(Number(id));
    if (!fitnessEntry) {
      return res.status(404).json("Fitness entry not found");
    }
    const updatedFitnessEntry = await updateCompletionStatus(
      id,
      !fitnessEntry.is_true
    );
    if (updatedFitnessEntry.id) {
      res.status(200).json(updatedFitnessEntry);
    } else {
      res.status(500).json("Server error: Could not update completion status.");
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json("Server error: Could not update completion status.");
  }
});

module.exports = workout_tb;
