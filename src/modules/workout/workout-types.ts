export interface Workout {
	id: number;
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
}
