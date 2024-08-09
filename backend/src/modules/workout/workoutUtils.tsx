import { Workout } from './workout-types';

export const calculateWorkoutDetails = (workout: Workout): Workout => {
	if (workout.type === 'running') {
		workout.pace = workout.duration / workout.distance;
		workout.description = `Running workout with a pace of ${workout.pace.toFixed(
			1
		)} min/mile`;
	} else if (workout.type === 'biking') {
		// Speed in miles per hour
		workout.speed = workout.distance / (workout.duration / 60);
		workout.description = `Biking workout with a speed of ${workout.speed.toFixed(
			1
		)} miles/h`;
	}
	return workout;
};

export function formatTimesForMySQL(
	workout: Partial<Workout>
): Partial<Workout> {
	const formatDate = (dateString: string | undefined): string | undefined => {
		if (!dateString) return undefined;
		const date = new Date(dateString);
		// Format as 'YYYY-MM-DD HH:MM:SS'
		return date.toISOString().slice(0, 19).replace('T', ' ');
	};

	return {
		...workout,
		createdOn: formatDate(workout.createdOn),
		startTime: formatDate(workout.startTime),
		endTime: formatDate(workout.endTime),
	};
}
