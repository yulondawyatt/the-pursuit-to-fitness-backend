const db = require("../db/dbConfig.js");

// Get all exercises
const getAllExercises = async () => {
  try {
    const allExercises = await db.any("SELECT * FROM workout_tb");
    const exercisesWithIntensity = allExercises.map((exercise) => ({
      ...exercise,
      isIntense: exercise.workout_days,
    }));
    return exercisesWithIntensity;
  } catch (error) {
    console.error("Error in getAllExercises:", error);
    throw error;
  }
};

// Get one exercise by id
const getExercise = async (id) => {
  try {
    const oneExercise = await db.one(
      "SELECT * FROM workout_tb WHERE id=$1",
      id
    );
    return oneExercise;
  } catch (error) {
    return error;
  }
};

const createFitness = async (workout) => {
  try {
    const newFitness = await db.one(
      "INSERT INTO workout_tb (workout_name, workout_days, workout_type, is_true) VALUES($1, $2, $3, $4) RETURNING *",
      [
        workout.workout_name,
        workout.workout_days,
        workout.workout_type,
        workout.is_true,
      ]
    );
    return newFitness;
  } catch (error) {
    return error;
  }
};

const deleteFitness = async (id) => {
  try {
    const deletedFitness = await db.one(
      "DELETE FROM workout_tb WHERE id = $1 RETURNING *",
      id
    );
    return deletedFitness;
  } catch (error) {
    return error;
  }
};

const updateFitness = async (id, workout) => {
  try {
    const updatedFitness = await db.one(
      "UPDATE workout_tb SET workout_name=$1, workout_days=$2, workout_type=$3, is_true=$4 WHERE id=$5 RETURNING *",
      [
        workout.workout_name,
        workout.workout_days,
        workout.workout_type,
        workout.is_true,
        id,
      ]
    );
    return updatedFitness;
  } catch (error) {
    return error;
  }
};

const updateCompletionStatus = async (id, is_true) => {
  try {
    const updatedFitness = await db.one(
      "UPDATE workout_tb SET is_true=$1 WHERE id=$2 RETURNING *",
      [is_true, id]
    );
    return updatedFitness;
  } catch (error) {
    console.error("Error updating completion status:", error);
    throw error;
  }
};

module.exports = {
  getAllExercises,
  getExercise,
  createFitness,
  deleteFitness,
  updateFitness,
  updateCompletionStatus,
};