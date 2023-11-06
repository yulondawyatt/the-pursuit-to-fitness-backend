DROP DATABASE IF EXISTS workout;
CREATE DATABASE workout;
\c fitness_app;
CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    workout_name TEXT NOT NULL,
    workday_days INT NOT NULL,
    workout_type TEXT,
    is_favorite BOOLEAN
);