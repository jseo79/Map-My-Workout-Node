import React, { useState } from 'react';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Container.module.css';

const MapContainer: React.FC = () => {
	const [showForm, setShowForm] = useState(false);
	const [latLng, setLatLng] = useState<L.LatLng | null>(null);

	const handleMapClick = () => {
		setLatLng(latLng);
		setShowForm(true);
	};

	return (
		<div className={styles.container}>
			<Sidebar showForm={showForm} />
			<Map onMapClick={handleMapClick} />
		</div>
	);
};

export default MapContainer;
