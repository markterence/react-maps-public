import { APIProvider, Map } from '@vis.gl/react-google-maps';
import './google-maps.css';

import { useExamplePropertiesData } from 'hooks/useExamplePropertiesResult';
import { useState, useMemo, useEffect } from 'react';
import { getGoogleMapsPosition } from 'utils/property-utils';
import PropertyMarkerWithWindow from 'components/maps/GoogleMaps/PropertyMarkerWithInfoWindow/PropertyMarkerWithWindow';
import mapStyle from './map-style';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
const ZOOM_LEVEL = {
  STREET: 15,
  CITY: 10,
  BUILDINGS: 20,
  LANDMASS: 5
};
const ZOOM_OFFSET = 0.8;
const ZOOM_THRESHOLD = ZOOM_LEVEL.BUILDINGS - ZOOM_OFFSET;
const MAP_ID = '558bf0613b6bda23';
const MAP_CONFIG = [
  {
    mapId: '7838ff17986fd7ae',
    id: 'normal'
  },
  {
    mapId: '558bf0613b6bda23',
    id: 'parcel-lines'
  }
];
/**
 * Using Advanced Markers
 * https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
 */
export default function GoogleMaps() {
  const { getFirstProperty, properties } = useExamplePropertiesData();

  const [initialProperty] = useState(getFirstProperty());

  const [zoom, setZoom] = useState(10);
  const [mapTypeId, setMapTypeId] = useState('roadmap');
  const [mapConfig, setMapConfig] = useState(MAP_CONFIG[0]);

  useEffect(() => {
    if (zoom > ZOOM_THRESHOLD) {
      setMapTypeId('hybrid');
      setMapConfig(MAP_CONFIG[1]);
    } else {
      setMapTypeId('roadmap');
      setMapConfig(MAP_CONFIG[0]);
    }
  }, [zoom]);

  const pins = useMemo(() => {
    return properties.map((property, index) => {
      return <PropertyMarkerWithWindow key={`google-maps-marker${index}`} propertyData={property} />;
    });
  }, [properties]);

  /**
   *
   * @param {import('@vis.gl/react-google-maps').MapCameraChangedEvent} event
   */
  const handleZoomChanged = (event) => {
    const zoom = event.detail.zoom;
    setZoom(zoom);
  };

  return (
    <div className="googleMaps">
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map
          style={{ width: '100%', height: '100%' }}
          defaultCenter={getGoogleMapsPosition(initialProperty)}
          defaultZoom={13}
          minZoom={8}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="7838ff17986fd7ae"
          onZoomChanged={handleZoomChanged}
          mapTypeId={mapTypeId}
          mapStyleId="92df180693960f85"
          tilt={0}
        >
          {pins}
        </Map>
      </APIProvider>
    </div>
  );
}
