import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import L from 'leaflet';

interface SidebarProps {
	showForm: boolean;
	latLng: L.LatLng | null;
}

const Sidebar: React.FC<SidebarProps> = ({ showForm, latLng }) => {
	const [workoutType, setWorkoutType] = useState('running');

	const handleWorkoutTypeChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		setWorkoutType(e.target.value);
	};

	return (
		<div className={styles.sidebar}>
			<label className={styles.logo}>Map My Workout</label>
			<ul className={styles.workouts}>
				<form
					className={`${styles.form} ${
						showForm ? '' : styles.hidden
					}`}
				>
					{latLng && (
						<>
							<div className={styles.form__row}>
								<label className={styles.form__label}>
									Latitude
								</label>
								<input
									className={`${styles.form__input} ${styles['form__input--latitude']}`}
									value={latLng.lat}
									readOnly
								/>
							</div>
							<div className={styles.form__row}>
								<label className={styles.form__label}>
									Longitude
								</label>
								<input
									className={`${styles.form__input} ${styles['form__input--longitude']}`}
									value={latLng.lng}
									readOnly
								/>
							</div>
						</>
					)}
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
							placeholder="mile"
						/>
					</div>
					<div className={styles.form__row}>
						<label className={styles.form__label}>Duration</label>
						<input
							className={`${styles.form__input} ${styles['form__input--duration']}`}
							placeholder="min"
						/>
					</div>
					{workoutType === 'running' ? (
						<div className={styles.form__row}>
							<label className={styles.form__label}>
								Cadence
							</label>
							<input
								className={`${styles.form__input} ${styles['form__input--cadence']}`}
								placeholder="step/min"
							/>
						</div>
					) : (
						<div className={styles.form__row}>
							<label className={styles.form__label}>
								Elev Gain
							</label>
							<input
								className={`${styles.form__input} ${styles['form__input--elevation']}`}
								placeholder="feet"
							/>
						</div>
					)}
					<button className={styles.form__btn}>OK</button>
				</form>
			</ul>
		</div>
	);
};

export default Sidebar;
