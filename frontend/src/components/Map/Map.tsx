import L from 'leaflet';
import React, { useEffect, useRef } from 'react';
import styles from './Map.module.css';
import { Workout } from '../../../../backend/src/modules/workout/workout-types.ts';
import Marker from '../Marker/Marker';

interface MapProps {
	onMapClick: (latLng: L.LeafletMouseEvent) => void;
	workouts: Workout[];
}

const Map: React.FC<MapProps> = ({ onMapClick, workouts }) => {
	const mapRef = useRef<L.Map | null>(null);

	useEffect(() => {
		getPosition();

		return () => {
			if (mapRef.current) {
				mapRef.current.remove();
			}
		};
	}, []);

	const getPosition = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(loadMap, () => {
				alert('Could not get your location');
			});
		}
	};

	const loadMap = (position: GeolocationPosition) => {
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

	return (
		<div id="map" className={styles.map}>
			{mapRef.current &&
				workouts.map((workout, index) => (
					<Marker
						key={index}
						map={mapRef.current}
						coords={[workout.latitude, workout.longitude]}
						type={workout.type}
						description={workout.description || 'No description'}
					/>
				))}
		</div>
	);
};

export default Map;
