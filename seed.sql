\c fitness_app;
--  ** workout_types **
--calistethics (push up, situp, pull up)
-- cardio (jogging, biking), 
-- weight-training ( dumbells, barbell ), 
-- flexibility ( yoga, pilates )  
Insert INTO workout (workout_name, workout_days, workout_type, is_true) VALUES
('Push ups', 3, 'calistethics', true),
('Sit ups', 1, 'calistethics', true),
('Jogging', 5, 'cardio', false),
('pilates', 3, 'flexibility', true),
('Dumbell Curl', 2, 'Weight Training', false),
('Pull ups', 5, 'Calistethics', true)