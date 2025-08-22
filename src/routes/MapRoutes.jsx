import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

const GoogleMaps = Loadable(lazy(() => import('pages/maps/google-maps')));

const MapRoutes = {
  path: '/map',
  element: <DashboardLayout />,
  children: [
    {
      path: 'google-maps',
      element: <GoogleMaps />
    }
  ]
};

export default MapRoutes;
