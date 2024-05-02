import express from 'express';
import WorkoutController from '../controllers/workout-controller';

const workoutRoutes = express.Router();

workoutRoutes.get('workout', (req, res) => {});

workoutRoutes.post('/workout', WorkoutController.addWorkout);

export default workoutRoutes;
