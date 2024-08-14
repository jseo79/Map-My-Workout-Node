import React, { useState } from 'react';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Container.module.css';
import L from 'leaflet';

const MapContainer: React.FC = () => {
	const [showForm, setShowForm] = useState(false);
	const [latLng, setLatLng] = useState<L.LatLng | null>(null);

	const handleMapClick = (event: L.LeafletMouseEvent) => {
		const latlng = event.latlng;
		setLatLng(latlng);
		setShowForm(true);
	};

	const hideForm = () => {
		setShowForm(false);
	};

	return (
		<div className={styles.container}>
			<Sidebar showForm={showForm} latLng={latLng} hideForm={hideForm} />
			<Map onMapClick={handleMapClick} />
		</div>
	);
};

export default MapContainer;
