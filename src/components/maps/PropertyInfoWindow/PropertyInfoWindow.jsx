import PropTypes from 'prop-types';

import ClickAwayListener from 'react-click-away-listener';

import CardMedia from '@mui/material/CardMedia';

import { toPropertiesDTO } from 'utils/property-utils';
import { getImageUrl } from 'utils/getImageUrl';

function PropertyInfoWindow({ propertyData }) {
  const property = toPropertiesDTO(propertyData);

  const getImage = (imgSrc) => {
    if (imgSrc) {
      return imgSrc.includes('googleapis') ? getImageUrl('propertyPlaceHolder.png', 'base') : imgSrc;
    }
    return getImageUrl('propertyPlaceHolder.png', 'base');
  };

  return (
    <div>
      <p>PropertyID: {property.zpid}</p>
      <CardMedia sx={{ height: 200, width: 250, textDecoration: 'none' }} image={getImage(property.imgSrc)} component="img" />
      <h3>{property.streetAddress}</h3>
    </div>
  );
}

PropertyInfoWindow.propTypes = {
  propertyData: PropTypes.object.isRequired
};

export default PropertyInfoWindow;
