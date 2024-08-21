import L from 'leaflet';
import React, { useEffect, useRef } from 'react';
import styles from './Map.module.css';
import { Workout } from '../../../../backend/src/modules/workout/workout-types.ts';

interface MapProps {
	onMapClick: (latLng: L.LeafletMouseEvent) => void;
	workouts: Workout[];
}

const Map: React.FC<MapProps> = ({ onMapClick, workouts }) => {
	const mapRef = useRef<L.Map | null>(null);
	const markersRef = useRef<L.Marker[]>([]);

	useEffect(() => {
		getPosition();

		return () => {
			if (mapRef.current) {
				mapRef.current.remove();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPosition = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(loadMap, () => {
				alert('Could not get your location');
			});
		}
	};

	const loadMap = (position: GeolocationPosition) => {
		if (mapRef.current) return;

		const { latitude, longitude } = position.coords;
		const coords = L.latLng(latitude, longitude);

		const map = L.map('map').setView(coords, 13);
		mapRef.current = map;

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		map.on('click', (e: L.LeafletMouseEvent) => {
			onMapClick(e);
		});
	};

	useEffect(() => {
		if (mapRef.current) {
			markersRef.current.forEach((marker) =>
				mapRef.current?.removeLayer(marker)
			);
			markersRef.current = [];

			workouts.forEach((workout) => {
				const popupClass =
					workout.type === 'running'
						? styles.runningPopup
						: styles.bikingPopup;

				const marker = L.marker([workout.latitude, workout.longitude])
					.addTo(mapRef.current!)
					.bindPopup(
						L.popup({
							maxWidth: 250,
							minWidth: 100,
							autoClose: false,
							closeOnClick: false,
							className: `${styles.leafletPopup} ${popupClass}`,
						})
					)
					.setPopupContent(
						`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
							workout.description || 'No description'
						}`
					)
					.openPopup();

				markersRef.current.push(marker);
			});
		}
	}, [workouts]);

	return <div id="map" className={styles.map} />;
};

export default Map;
