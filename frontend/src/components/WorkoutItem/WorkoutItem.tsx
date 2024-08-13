import React from 'react';
import { Workout } from '../../../../backend/src/modules/workout/workout-types.ts';
import styles from './WorkoutItem.module.css';

interface WorkoutItemProps {
	workout: Workout;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout }) => {
	return (
		<li
			className={`${styles.workout} ${
				styles[`workout--${workout.type}`]
			}`}
		>
			<button className={styles.close_buttons} type="button">
				x
			</button>
			<h2 className={styles.workout__title}>{workout.description}</h2>
			<div className={styles.workout__details}>
				<span className={styles.workout__icon}>
					{workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}
				</span>
				<span className={styles.workout__value}>
					{workout.distance}
				</span>
				<span className={styles.workout__unit}>mile</span>
			</div>
			<div className={styles.workout__details}>
				<span className={styles.workout__icon}>⏱</span>
				<span className={styles.workout__value}>
					{workout.duration}
				</span>
				<span className={styles.workout__unit}>min</span>
			</div>
			{workout.type === 'running' && (
				<>
					<div className={styles.workout__details}>
						<span className={styles.workout__icon}>⚡️</span>
						<span className={styles.workout__value}>
							{(workout.pace || 0).toFixed(1)}
						</span>
						<span className={styles.workout__unit}>min/mile</span>
					</div>
					<div className={styles.workout__details}>
						<span className={styles.workout__icon}>🦶🏼</span>
						<span className={styles.workout__value}>
							{workout.cadence}
						</span>
						<span className={styles.workout__unit}>spm</span>
					</div>
				</>
			)}
			{workout.type === 'biking' && (
				<>
					<div className={styles.workout__details}>
						<span className={styles.workout__icon}>⚡️</span>
						<span className={styles.workout__value}>
							{(workout.speed || 0).toFixed(1)}
						</span>
						<span className={styles.workout__unit}>mile/h</span>
					</div>
					<div className={styles.workout__details}>
						<span className={styles.workout__icon}>⛰</span>
						<span className={styles.workout__value}>
							{workout.elevation}
						</span>
						<span className={styles.workout__unit}>m</span>
					</div>
				</>
			)}
		</li>
	);
};

export default WorkoutItem;
