import L from 'leaflet';
import React, { useEffect } from 'react';
import styles from './Map.module.css';

interface MapProps {
	onMapClick: (latLng: L.LatLng) => void;
}

const Map: React.FC<MapProps> = ({ onMapClick }) => {
	useEffect(() => {
		getPosition();
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

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		map.on('click', (e: L.LeafletMouseEvent) => {
			onMapClick(e.latlng);
			console.log(e.latlng);
		});
	};

	return <div id="map" className={styles.map}></div>;
};

export default Map;
