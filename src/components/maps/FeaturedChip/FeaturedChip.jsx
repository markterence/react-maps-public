import { memo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const PropertyPill = styled(Chip)(({ theme }) => ({
  borderRadius: '10px',
  zIndex: 2,
  backgroundColor: theme.palette.error.dark,
  boxShadow: '0 2px 2px rgba(0,0,0,0.75)',

  '&::after': {
    position: 'absolute',
    height: 0,
    width: 0,
    left: 'calc(50% - 4px)',
    top: '99%',
    border: '4px solid transparent',
    borderTopColor: theme.palette.error.dark,
    content: '""'
  }
}));

function FeaturedChip({ ...props }) {
  return <PropertyPill {...props} size="small" color="error" />;
}

FeaturedChip.propTypes = {
  style: PropTypes.object
};

export default memo(FeaturedChip);
