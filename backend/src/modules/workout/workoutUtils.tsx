import { Workout } from './workout-types';

//Format String back to Date so we can get the 'Month Day" format for description
const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
	};
	return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const calculateWorkoutDetails = (workout: Workout): Workout => {
	if (workout.type === 'running') {
		workout.pace = workout.duration / workout.distance;
		workout.description = `Running workout on ${formatDate(
			new Date(workout.startTime)
		)}`;
	} else if (workout.type === 'biking') {
		// Speed in miles per hour
		workout.speed = workout.distance / (workout.duration / 60);
		workout.description = `Biking workout on ${formatDate(
			new Date(workout.startTime)
		)}`;
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
