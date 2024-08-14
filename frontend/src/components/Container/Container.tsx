import React, { useState } from 'react';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Container.module.css';
import L from 'leaflet';

const MapContainer: React.FC = () => {
	const [showForm, setShowForm] = useState(false);
	const [latLng, setLatLng] = useState<L.LatLng | null>(null);
	const [cursorOnDistance, setCursorOnDistance] = useState(false);

	const handleMapClick = (event: L.LeafletMouseEvent) => {
		const latlng = event.latlng;
		setLatLng(latlng);
		setShowForm(true);
		setCursorOnDistance(true);

		setTimeout(() => {
			setCursorOnDistance(false);
		}, 0);
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
				cursorOnDistance={cursorOnDistance}
			/>
			<Map onMapClick={handleMapClick} />
		</div>
	);
};

export default MapContainer;
