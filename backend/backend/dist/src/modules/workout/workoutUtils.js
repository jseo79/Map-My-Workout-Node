"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateWorkoutDetails = void 0;
const calculateWorkoutDetails = (workout) => {
    if (workout.type === 'running') {
        workout.pace = workout.duration / workout.distance;
        workout.description = `Running workout with a pace of ${workout.pace.toFixed(1)} min/mile`;
    }
    else if (workout.type === 'biking') {
        workout.speed = workout.distance / (workout.duration / 60);
        workout.description = `Biking workout with a speed of ${workout.speed.toFixed(1)} miles/h`;
    }
    return workout;
};
exports.calculateWorkoutDetails = calculateWorkoutDetails;
//# sourceMappingURL=workoutUtils.js.map