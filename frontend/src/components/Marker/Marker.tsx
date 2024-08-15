import L from 'leaflet';
import { useEffect } from 'react';
import styles from './Marker.module.css';

interface MarkerProps {
	map: L.Map | null;
	coords: L.LatLngExpression;
	type: string;
	description: string;
}

const Marker: React.FC<MarkerProps> = ({ map, coords, type, description }) => {
	useEffect(() => {
		if (map) {
			const popupClass =
				type === 'running' ? styles.runningPopup : styles.bikingPopup;

			const marker = L.marker(coords)
				.addTo(map)
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
					`${type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
						description || 'No description'
					}`
				)
				.openPopup();

			return () => {
				map.removeLayer(marker);
			};
		}
	}, [map, coords, type, description]);

	return null;
};

export default Marker;
