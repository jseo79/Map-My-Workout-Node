import express from 'express';
import WorkoutController from '../controllers/workout-controller';

const workoutRoutes = express.Router();

workoutRoutes.get('/workouts', WorkoutController.getAllWorkouts);

workoutRoutes.post('/workouts', WorkoutController.addWorkout);

workoutRoutes.delete('/workouts/:id', WorkoutController.deleteWorkout);

export default workoutRoutes;
