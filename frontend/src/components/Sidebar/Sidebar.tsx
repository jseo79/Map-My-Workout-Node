import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
	return (
		<div className={styles.sidebar}>
			<label className={styles.logo}> Map My Workout</label>

			<ul className={styles.workouts}>
				<form className={`${styles.form} ${styles.hidden}`}>
					<div className={styles.form__row}>
						<label className={styles.form__label}>Type</label>
						<select
							className={`${styles.form__input} ${styles['form__input--type']}`}
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
					<div className={styles.form__row}>
						<label className={styles.form__label}>Cadence</label>
						<input
							className={`${styles.form__input} ${styles['form__input--cadence']}`}
							placeholder="step/min"
						/>
					</div>
					<div
						className={`${styles.form__row} ${styles['form__row--hidden']}`}
					>
						<label className={styles.form__label}>Elev Gain</label>
						<input
							className={`${styles.form__input} ${styles['form__input--elevation']}`}
							placeholder="feet"
						/>
					</div>
					<button className={styles.form__btn}>OK</button>
				</form>
			</ul>
		</div>
	);
};

export default Sidebar;
