import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Container.module.css';
import L from 'leaflet';
import { Workout } from '../../../../backend/src/modules/workout/workout-types.ts';

const MapContainer: React.FC = () => {
	const [showForm, setShowForm] = useState(false);
	const [latLng, setLatLng] = useState<L.LatLng | null>(null);
	const [workouts, setWorkouts] = useState<Workout[]>([]);

	const addWorkout = async (workout: Workout) => {
		try {
			const response = await axios.post(
				'http://localhost:5001/api/workouts',
				workout
			);
			setWorkouts((prevWorkouts) => [response.data, ...prevWorkouts]);
			fetchWorkouts();
		} catch (error) {
			console.error('Error adding workout:', error);
		}
	};

	const fetchWorkouts = async () => {
		try {
			const response = await axios.get(
				'http://localhost:5001/api/workouts'
			);
			setWorkouts(response.data);
		} catch (error) {
			console.error('Error fetching workouts:', error);
		}
	};

	useEffect(() => {
		fetchWorkouts();
	}, []);

	const handleDeleteWorkout = async (id: number) => {
		try {
			await axios.delete(`http://localhost:5001/api/workouts/${id}`);

			setWorkouts((prevWorkouts) =>
				prevWorkouts.filter((workout) => workout.id !== id)
			);
		} catch (error) {
			console.error('Failed to delete workout:', error);
		}
	};

	const handleMapClick = (event: L.LeafletMouseEvent) => {
		setLatLng(event.latlng);
		setShowForm(true);
	};

	const hideForm = () => {
		setShowForm(false);
	};

	return (
		<div className={styles.container}>
			<Sidebar
				showForm={showForm}
				latLng={latLng}
				hideForm={hideForm}
				addWorkout={addWorkout}
				workouts={workouts}
				handleDeleteWorkout={handleDeleteWorkout}
			/>
			<Map onMapClick={handleMapClick} workouts={workouts} />
		</div>
	);
};

export default MapContainer;
