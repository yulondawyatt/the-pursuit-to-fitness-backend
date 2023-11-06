const db = require("../db/dbConfig.js");

const getAllFitness = async () => {
    try {
        const allFitness = await db.any("SELECT * FROM workout");
        return allFitness;
    } catch (error) {
        return error;
    }
};

const getFitness = async (id) => {
    try {
        const oneFitness = await db.one("SELECT * FROM workout WHERE id=$1", id)
        return oneFitness;
    } catch (error) {
        return error;
    }
};

  const createFitness = async (workout) => {
    try {
      const newFitness = await db.one(
        "INSERT INTO workout (workout_name, workout_days, workout_type, is_true) VALUES($1, $2, $3, $4) RETURNING *",
        [workout.workout_name, workout.workout_days, workout.workout_type, workout.is_true]
      );
      return newFitness;
    } catch (error) {
      return error;
    }
  };

  const deleteFitness = async (id) => {
    try {
      const deletedFitness = await db.one(
        "DELETE FROM workout WHERE id = $1 RETURNING *",
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
            "UPDATE workout SET workout_name=$1, workout_days=$2, workout_type=$3, is_true=$4 WHERE id=$5 RETURNING *",
            [workout.workout_name, workout.workout_days, workout.workout_type, workout.is_true, id]
        );
        return updatedColor;
    } catch (error) {
        return error;
    }
};


module.exports = { getAllFitness, getFitness, createFitness, deleteFitness, updateFitness }