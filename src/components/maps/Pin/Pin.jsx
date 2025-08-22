import { memo } from 'react';
import { useTheme } from '@mui/material/styles';

function Pin() {
  const theme = useTheme();

  const style = {
    backgroundColor: theme.palette.error.dark
  };

  return <div style={style} className="property-dot"></div>;
}

export default memo(Pin);
