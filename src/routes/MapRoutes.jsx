import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

const MapBoxGLMapLibre = Loadable(lazy(() => import('pages/maps/mapbox-gl-maptiler')));
const GoogleMaps = Loadable(lazy(() => import('pages/maps/google-maps')));

const MapRoutes = {
  path: '/map',
  element: <DashboardLayout />,
  children: [
    {
      path: 'mapbox-gl-maptiler',
      element: <MapBoxGLMapLibre />
    },
    {
      path: 'google-maps',
      element: <GoogleMaps />
    }
  ]
};

export default MapRoutes;
