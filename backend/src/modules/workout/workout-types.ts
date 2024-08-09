export interface Workout {
	// Backend automatically increments id so it is not needed initially in the frontend
	id?: number;

	userId: number;
	type: 'running' | 'biking';
	duration: number;
	startTime: string;
	endTime: string;
	distanceType: 'miles' | 'kilometers';
	distance: number;
	latitude: number;
	longitude: number;
	createdOn: string;

	// These fields are calculated by the backend based on the type of workout, and the description is calculated based on some of the workout details
	cadence?: number;
	elevation?: number;
	pace?: number;
	speed?: number;
	description?: string;
}
