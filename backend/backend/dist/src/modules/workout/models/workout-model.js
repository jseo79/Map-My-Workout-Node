"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("../../repository"));
class WorkoutModel {
    static async addWorkout(workout) {
        try {
            return (0, repository_1.default)('workouts').insert(workout);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    static async getAllWorkouts() {
        try {
            return (0, repository_1.default)('workouts').select('*');
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
}
exports.default = WorkoutModel;
//# sourceMappingURL=workout-model.js.map