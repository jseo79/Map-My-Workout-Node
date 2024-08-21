"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimesForMySQL = exports.calculateWorkoutDetails = void 0;
const formatDate = (date) => {
    const options = {
        month: 'long',
        day: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};
const calculateWorkoutDetails = (workout) => {
    if (workout.type === 'running') {
        workout.pace = workout.duration / workout.distance;
        workout.description = `Running workout on ${formatDate(new Date(workout.startTime))}`;
    }
    else if (workout.type === 'biking') {
        workout.speed = workout.distance / (workout.duration / 60);
        workout.description = `Biking workout on ${formatDate(new Date(workout.startTime))}`;
    }
    return workout;
};
exports.calculateWorkoutDetails = calculateWorkoutDetails;
function formatTimesForMySQL(workout) {
    const formatDate = (dateString) => {
        if (!dateString)
            return undefined;
        const date = new Date(dateString);
        return date.toISOString().slice(0, 19).replace('T', ' ');
    };
    return Object.assign(Object.assign({}, workout), { createdOn: formatDate(workout.createdOn), startTime: formatDate(workout.startTime), endTime: formatDate(workout.endTime) });
}
exports.formatTimesForMySQL = formatTimesForMySQL;
//# sourceMappingURL=workoutUtils.js.map