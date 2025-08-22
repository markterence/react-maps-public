import { useState, useMemo } from 'react';

// material-ui
import Map, { Marker, ScaleControl } from 'react-map-gl/maplibre';
import Pin from '../../components/maps/Pin/Pin';
import FeaturedChip from '../../components/maps/FeaturedChip/FeaturedChip';

import { formatPriceWithSuffix } from '../../utils/formatters';

import PROPERTIES from '../../assets/data/sample-search-results.json';

const MAPTILER_ACCESS_TOKEN = import.meta.env.VITE_APP_MAPTILER_ACCESS_TOKEN;

/**
 * When `true`, enables the switching between street and satellite map styles based on zoom level
 */
const enableDynamicMapStyleSwitching = true;

function getFirstProperty() {
  return PROPERTIES.results[0];
}

export default function MapBoxGLMapLibre() {
  const streetMapStyle = `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_ACCESS_TOKEN}`;
  const satelliteMapStyle = `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_ACCESS_TOKEN}`;

  // Zoom offset when to change the map style
  const ZOOM_LEVEL = 16.5;

  const [zoom, setZoom] = useState(0);
  const [property] = useState(getFirstProperty());

  function handleZoom(event) {
    setZoom(event.viewState.zoom);
  }

  /**
   * Get the map style URL based on the current zoom level
   * @returns {string} The map style URL based on the current zoom level
   */
  function getMapStyle() {
    if (!enableDynamicMapStyleSwitching) {
      return streetMapStyle;
    }
    return zoom > ZOOM_LEVEL ? satelliteMapStyle : streetMapStyle;
  }

  /**
   * Create the pins for the properties
   */
  const pins = useMemo(() => {
    /**
     * Use chip instead of pin to display the property pill when the property is featured
     */
    function renderPin(property) {
      if (property.isFeatured) {
        return <FeaturedChip label={formatPriceWithSuffix(property.price)} />;
      }
      return <Pin />;
    }

    return PROPERTIES.results.map((property, index) => {
      const markerStyle = {
        // Put the Marker with FeaturedChip on top of the other markers
        ...(property.isFeatured && { zIndex: 1 })
      };

      return (
        // eslint-disable-next-line prettier/prettier
        // prettier-ignore
        <Marker key={`marker-${index}`} 
          anchor="bottom" 
          longitude={property.longitude} 
          latitude={property.latitude} 
          style={markerStyle}
        >
          {renderPin(property)}
        </Marker>
      );
    });
  }, []);

  return (
    <>
      <p>ZoomOffset: {ZOOM_LEVEL}</p>
      <p>View State: {zoom}</p>
      <Map
        initialViewState={{
          longitude: property.longitude,
          latitude: property.latitude,
          zoom: 14
        }}
        dragRotate={false}
        style={{ width: 600, height: 400 }}
        onZoom={handleZoom}
        mapStyle={getMapStyle()}
      >
        <ScaleControl />
        {pins}
      </Map>
    </>
  );
}
