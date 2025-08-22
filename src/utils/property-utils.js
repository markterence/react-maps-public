export const toPropertiesDTO = (property) => {
  return {
    bathrooms: property.bathrooms,
    bedrooms: property.bedrooms,
    city: property.city,
    country: property.country,
    currency: property.currency,
    daysOnZillow: property.daysOnZillow,
    homeStatus: property.homeStatus,
    homeStatusForHDP: property.homeStatusForHDP,
    homeType: property.homeType,
    imgSrc: property.imgSrc,
    isFeatured: property.isFeatured,
    isNonOwnerOccupied: property.isNonOwnerOccupied,
    isPreforeclosureAuction: property.isPreforeclosureAuction,
    isPremierBuilder: property.isPremierBuilder,
    isShowcaseListing: property.isShowcaseListing,
    isUnmappable: property.isUnmappable,
    isZillowOwned: property.isZillowOwned,
    latitude: property.latitude,
    listingSubType: property.listing_sub_type,
    livingArea: property.livingArea,
    longitude: property.longitude,
    lotAreaUnit: property.lotAreaUnit,
    lotAreaValue: property.lotAreaValue,
    price: property.price,
    priceForHDP: property.priceForHDP,
    rentZestimate: property.rentZestimate,
    shouldHighlight: property.shouldHighlight,
    state: property.state,
    streetAddress: property.streetAddress,
    taxAssessedValue: property.taxAssessedValue,
    zestimate: property.zestimate,
    zipcode: property.zipcode,
    zpid: property.zpid
  };
};

/**
 * Takes an object with `latitude` and `longitude` properties and returns a Google Maps LatLngLiteral object
 * @param {*} property Must contain `latitude` and `longitude`
 */
export const getGoogleMapsPosition = (property) => {
  const { latitude, longitude } = property;
  return { lat: latitude, lng: longitude };
};

export const getPropertyCoordinates = (property) => {
  return {
    latitude: property.latitude,
    longitude: property.longitude
  };
};
