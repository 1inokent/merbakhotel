import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import styles from './Map.module.css';

export default function YMap() {
  return (
    <YMaps>
      <div className={styles.mapContainer}>
        <Map
          className={styles.mapContainerMap}
          defaultState={{
            center: [45.05795592449081, 35.38641242128752],
            zoom: 15,
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
