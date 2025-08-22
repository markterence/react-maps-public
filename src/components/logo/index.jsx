import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';

import { APP_DEFAULT_PATH } from 'config';
import useAuth from 'hooks/useAuth';

export default function LogoSection({ reverse, isIcon, sx, to }) {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonBase disableRipple {...(isLoggedIn && { component: Link, to: !to ? APP_DEFAULT_PATH : to, sx })}>
      <span></span>
    </ButtonBase>
  );
}

LogoSection.propTypes = { reverse: PropTypes.bool, isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any };
