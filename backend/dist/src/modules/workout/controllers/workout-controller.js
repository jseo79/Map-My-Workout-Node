"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workout_model_1 = __importDefault(require("../models/workout-model"));
const workoutUtils_1 = require("../workoutUtils");
class WorkoutController {
    static async addWorkout(req, res) {
        try {
            const calculatedWorkout = (0, workoutUtils_1.calculateWorkoutDetails)(req.body);
            const formattedWorkout = (0, workoutUtils_1.formatTimesForMySQL)(calculatedWorkout);
            await workout_model_1.default.addWorkout(formattedWorkout);
            return res.send(req.body);
        }
        catch (e) {
            console.log(e);
        }
    }
    static async getAllWorkouts(req, res) {
        try {
            const workouts = await workout_model_1.default.getAllWorkouts();
            return res.send(workouts);
        }
        catch (e) {
            console.log(e);
        }
    }
    static async deleteWorkout(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            await workout_model_1.default.deleteWorkout(id);
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete workout' });
        }
    }
}
exports.default = WorkoutController;
//# sourceMappingURL=workout-controller.js.map