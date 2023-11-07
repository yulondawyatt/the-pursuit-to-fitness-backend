DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;
\c fitness_db;
CREATE TABLE workout_tb (
    id SERIAL PRIMARY KEY,
    workout_name TEXT NOT NULL,
<<<<<<< HEAD
    workday_days INT NOT NULL, -- committed days
=======
    workout_days INT NOT NULL, -- commited days
>>>>>>> b8d0b1db7d0a4a513dbd37e3b327b576299e0834
    workout_type TEXT,
    is_true BOOLEAN -- completed all commited days?
);