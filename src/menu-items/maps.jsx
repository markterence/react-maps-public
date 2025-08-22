// third-party
import { FormattedMessage } from 'react-intl'; 

// assets
import { BorderOutlined, QuestionOutlined, StopOutlined } from '@ant-design/icons';

// type

// icons
const icons = {
  BorderOutlined,
  QuestionOutlined,
  StopOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const maps = {
  id: 'maps',
  title: <FormattedMessage id="maps" />,
  type: 'group',
  children: [
    {
      id: 'maps.google',
      title: <FormattedMessage id="maps.google" />,
      type: 'item',
      url: '/map/google-maps'
    },
    {
      id: 'maps.mapbox-gl-maptiler',
      title: <FormattedMessage id="maps.mapbox-gl-maptiler" />,
      type: 'item',
      url: '/map/mapbox-gl-maptiler'
    }
  ]
};

export default maps;
