DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;
\c fitness_db;
CREATE TABLE workout_tb (
    id SERIAL PRIMARY KEY,
    workout_name TEXT NOT NULL,
    workout_days INT NOT NULL, -- days commited to excercise
    workout_type TEXT,
    is_true BOOLEAN -- did you complete all commited days?
);