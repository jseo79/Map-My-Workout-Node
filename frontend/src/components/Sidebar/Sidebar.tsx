import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import styles from './Sidebar.module.css';
import { Workout } from '../../../../backend/src/modules/workout/workout-types.ts';
import WorkoutItem from '../WorkoutItem/WorkoutItem.tsx';

interface SidebarProps {
	showForm: boolean;
	latLng: L.LatLng | null;
	hideForm: () => void;
	workouts: Workout[];
	addWorkout: (workout: Workout) => void;
	handleDeleteWorkout: (id: number) => void;
	moveToWorkoutLocation: (
		lat: number,
		lng: number,
		updateLatLng: boolean
	) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
	showForm,
	latLng,
	hideForm,
	workouts,
	addWorkout,
	handleDeleteWorkout,
	moveToWorkoutLocation,
}) => {
	const [workoutType, setWorkoutType] = useState('running');
	const [distance, setDistance] = useState('');
	const [duration, setDuration] = useState('');
	const [cadence, setCadence] = useState('');
	const [elevation, setElevation] = useState('');
	const distanceRef = useRef<HTMLInputElement | null>(null);

	const handleWorkoutTypeChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		setWorkoutType(e.target.value);
	};

	const validInputs = (...inputs: number[]) =>
		inputs.every((inp) => Number.isFinite(inp));

	const allPositive = (...inputs: number[]) => inputs.every((inp) => inp > 0);

	const hideFormAndResetValues = () => {
		hideForm(); // Hide the form
		// Reset form fields
		setDistance('');
		setDuration('');
		setCadence('');
		setElevation('');
	};

	const newWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!latLng) {
			console.log('LatLng is null');
			return;
		}
		const { lat, lng } = latLng;
		const distanceValue = +distance;
		const durationValue = +duration;
		let workout: Workout | undefined;

		if (workoutType === 'running') {
			const cadenceValue = +cadence;
			if (
				!validInputs(distanceValue, durationValue, cadenceValue) ||
				!allPositive(distanceValue, durationValue, cadenceValue)
			) {
				return alert('Inputs have to be positive numbers');
			}

			workout = {
				type: 'running',
				duration: durationValue,
				startTime: new Date().toISOString(),
				endTime: new Date(
					new Date().getTime() + durationValue * 60000
				).toISOString(),
				distanceType: 'miles',
				distance: distanceValue,
				latitude: lat,
				longitude: lng,
				createdOn: new Date().toISOString(),
				cadence: cadenceValue,
			};
		} else if (workoutType === 'biking') {
			const elevationValue = +elevation;
			if (
				!validInputs(distanceValue, durationValue, elevationValue) ||
				!allPositive(distanceValue, durationValue)
			) {
				return alert('Inputs have to be positive numbers');
			}

			workout = {
				type: 'biking',
				duration: durationValue,
				startTime: new Date().toISOString(),
				endTime: new Date(
					new Date().getTime() + durationValue * 60000
				).toISOString(),
				distanceType: 'miles',
				distance: distanceValue,
				latitude: lat,
				longitude: lng,
				createdOn: new Date().toISOString(),
				elevation: elevationValue,
			};
		}

		if (workout) {
			addWorkout(workout);
			hideFormAndResetValues(); // Hide the form and reset values
		}
	};

	useEffect(() => {
		if (showForm && distanceRef.current) {
			setTimeout(() => distanceRef.current?.focus(), 50);
		}
	}, [showForm]);

	return (
		<div className={styles.sidebar}>
			<label className={styles.logo}>Map My Workout</label>
			<form
				className={`${styles.form} ${showForm ? '' : styles.hidden}`}
				onSubmit={newWorkout}
			>
				<button
					className={styles.close_buttons}
					type="button"
					onClick={hideForm}
				>
					x
				</button>
				<div className={styles.form__row}>
					<label className={styles.form__label}>Type</label>
					<select
						className={`${styles.form__input} ${styles['form__input--type']}`}
						value={workoutType}
						onChange={handleWorkoutTypeChange}
					>
						<option value="running">Running</option>
						<option value="biking">Biking</option>
					</select>
				</div>
				<div className={styles.form__row}>
					<label className={styles.form__label}>Distance</label>
					<input
						className={`${styles.form__input} ${styles['form__input--distance']}`}
						value={distance}
						onChange={(e) => setDistance(e.target.value)}
						placeholder="mile"
						ref={distanceRef}
					/>
				</div>
				<div className={styles.form__row}>
					<label className={styles.form__label}>Duration</label>
					<input
						className={`${styles.form__input} ${styles['form__input--duration']}`}
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						placeholder="min"
					/>
				</div>
				{workoutType === 'running' ? (
					<div className={styles.form__row}>
						<label className={styles.form__label}>Cadence</label>
						<input
							className={`${styles.form__input} ${styles['form__input--cadence']}`}
							value={cadence}
							onChange={(e) => setCadence(e.target.value)}
							placeholder="step/min"
						/>
					</div>
				) : (
					<div className={styles.form__row}>
						<label className={styles.form__label}>Elev Gain</label>
						<input
							className={`${styles.form__input} ${styles['form__input--elevation']}`}
							value={elevation}
							onChange={(e) => setElevation(e.target.value)}
							placeholder="feet"
						/>
					</div>
				)}
				<button className={styles.form__btn} type="submit">
					OK
				</button>
			</form>
			<ul className={styles.workouts}>
				{workouts.map((workout) => (
					<WorkoutItem
						key={workout.createdOn}
						workout={workout}
						moveToWorkoutLocation={() =>
							moveToWorkoutLocation(
								workout.latitude,
								workout.longitude,
								!showForm
							)
						}
						onDelete={() => {
							if (workout.id !== undefined) {
								handleDeleteWorkout(workout.id);
							}
						}}
					/>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
