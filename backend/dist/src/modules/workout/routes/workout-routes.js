"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workout_controller_1 = __importDefault(require("../controllers/workout-controller"));
const workoutRoutes = express_1.default.Router();
workoutRoutes.get('/workouts', workout_controller_1.default.getAllWorkouts);
workoutRoutes.post('/workouts', workout_controller_1.default.addWorkout);
workoutRoutes.delete('/workouts/:id', workout_controller_1.default.deleteWorkout);
exports.default = workoutRoutes;
//# sourceMappingURL=workout-routes.js.map