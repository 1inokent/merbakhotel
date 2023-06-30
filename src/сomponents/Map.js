import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './Map.css';

export default function YMap() {
  return (
    <YMaps>
      <h3>Мы находимся</h3>
      <p className="map-p-style">
        по адрессу Чернышевского 8 в городе Феодосия
      </p>
      <div className="map-container">
        <Map
          className="map-container__map"
          defaultState={{
            center: [45.05795592449081, 35.38641242128752],
            zoom: 17,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark defaultGeometry={[45.05795592449081, 35.38641242128752]} />
        </Map>
      </div>
    </YMaps>
  );
}
