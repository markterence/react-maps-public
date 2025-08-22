import { memo } from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';
import FeaturedChip from '../FeaturedChip/FeaturedChip';

import { toPropertiesDTO } from 'utils/property-utils';
import { formatPriceWithSuffix } from 'utils/formatters';

/**
 * Displays a property pill for the property
 * @param {object} props
 */
function PropertyPill({ propertyData, ...props }) {
  const property = toPropertiesDTO(propertyData);

  if (property.isFeatured) {
    return <FeaturedChip {...props} label={formatPriceWithSuffix(property.price)} />;
  }

  return <Pin />;
}

PropertyPill.propTypes = {
  /**
   * Zillow property object
   */
  propertyData: PropTypes.object.isRequired
};

export default memo(PropertyPill);
