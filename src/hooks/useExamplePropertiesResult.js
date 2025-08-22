import { useState } from 'react';
import PROPERTIES from '../assets/data/sample-search-results.json';
import { toPropertiesDTO } from '../utils/property-utils';

export function useExamplePropertiesData() {
  // HACK: The state initially starts with an empty array
  // This is a workaround to prevent the state from being empty
  // On actual usage, determine first if the state is empty
  const [properties] = useState(PROPERTIES.results);

  const getFirstProperty = () => {
    return toPropertiesDTO(properties[0]);
  };

  return {
    properties,
    getFirstProperty
  };
}
