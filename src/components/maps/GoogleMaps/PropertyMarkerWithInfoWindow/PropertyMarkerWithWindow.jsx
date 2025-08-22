import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Fade from '@mui/material/Fade';

import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import PropertyPill from 'components/maps/PropertyPill/PropertyPill';
import PropertyInfoWindow from 'components/maps/PropertyInfoWindow/PropertyInfoWindow';

import { getGoogleMapsPosition, toPropertiesDTO } from 'utils/property-utils';
import ClickAwayListener from 'react-click-away-listener';

const INFO_WINDOW_MAX_WIDTH = 440;

function PropertyMarkerWithWindow({ propertyData }) {
  const property = toPropertiesDTO(propertyData);

  // Handles the InfoWindow open state
  const [isInfoWindowOpen, setInfoWindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [anchorEl, setAnchorEl] = useState(null);
  const canBeOpen = open && Boolean(setAnchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  /**
   * @param {google.maps.MapMouseEvent} mapMouseEvent
   */
  const handleMarkerClick = (mapMouseEvent, property) => {
    console.debug('handleMarkerClick', property);

    setAnchorEl(mapMouseEvent.domEvent.currentTarget);

    setInfoWindowOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  const InfoWindow1 = () => {
    return (
      <ClickAwayListener onClickAway={() => setInfoWindowOpen(false)}>
        <InfoWindow anchor={marker} maxWidth={INFO_WINDOW_MAX_WIDTH} onCloseClick={() => setInfoWindowOpen(false)}>
          <PropertyInfoWindow propertyData={property} />
        </InfoWindow>
      </ClickAwayListener>
    );
  };
  

  return (
    // eslint-disable-next-line prettier/prettier
    // prettier-ignore
    <AdvancedMarker
      ref={markerRef}
      zIndex={property.isFeatured ? 1 : 0}
      position={getGoogleMapsPosition(property)}
      onClick={(e) => handleMarkerClick(e, property)}
    >
      {isInfoWindowOpen && <InfoWindow1 />}
      <PropertyPill propertyData={property} />
    </AdvancedMarker>
  );
}

PropertyMarkerWithWindow.propTypes = {
  propertyData: PropTypes.object.isRequired
};

export default PropertyMarkerWithWindow;
