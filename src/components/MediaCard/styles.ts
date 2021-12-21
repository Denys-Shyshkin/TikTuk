import Card, { CardProps } from '@mui/material/Card';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)<CardProps>(() => ({
  position: 'relative',
  width: 225,
}));

const StyledDiv = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  margin: 10,
  zIndex: 1,
  top: 0,
  left: 0,
}));

const StyledIcon = styled(PlayArrowOutlinedIcon)(() => ({
  color: 'white',
}));

export { StyledCard, StyledDiv, StyledIcon };
