import L from 'leaflet';
import React, { Component } from 'react';
import styles from './Map.module.css';

class Map extends Component {
	private map: L.Map | undefined;

	componentDidMount() {
		this.getPosition();
	}

	private getPosition(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this.loadMap.bind(this),
				() => {
					alert('Could not get your location');
				}
			);
		}
	}

	private loadMap(position: GeolocationPosition): void {
		const { latitude } = position.coords;
		const { longitude } = position.coords;
		const coords = L.latLng(latitude, longitude);

		this.map = L.map('map').setView(coords, 13);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.map);

		console.log('Map loaded with position:', coords);
	}

	render(): JSX.Element {
		return <div id="map" className={styles.map}></div>;
	}
}
export default Map;
