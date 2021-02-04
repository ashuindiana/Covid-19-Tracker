import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from './utils';

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({countries, casesType, center, zoom}) {
	console.log(casesType)
	return (
		<div className='map'>
			<MapContainer  scrollWheelZoom={false}>
				<ChangeMap center={center} zoom={zoom} />
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          			/>
          		{showDataOnMap(countries, casesType)}
			</MapContainer>
		</div>
	)
}

export default Map;