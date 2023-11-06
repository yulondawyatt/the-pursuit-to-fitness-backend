DROP DATABASE IF EXISTS fitness_app;
CREATE DATABASE fitness_app;
\c fitness_app;
CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    workout_name TEXT NOT NULL,
    workday_days INT NOT NULL, -- commited days
    workout_type TEXT,
    is_true BOOLEAN -- completed all commited days?
);