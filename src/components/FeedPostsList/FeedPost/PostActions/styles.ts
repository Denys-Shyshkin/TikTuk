import React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import { colors, isMobile } from '../../../../constants';

interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
  isMobile?: boolean
}

const StyledDiv = styled('div', {
  shouldForwardProp: (prop) => prop !== isMobile,
})<StyledDivProps>(({ isMobile }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'row' : 'column',
  justifyContent: isMobile ? 'space-between' : 'normal',
  width: isMobile ? 225 : 'auto',
}));

const StyledSection = styled('section')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledIconButton = styled(IconButton)<IconButtonProps>(() => ({
  backgroundColor: colors.secondary,
  margin: 5,
}));

export { StyledDiv, StyledSection, StyledIconButton };
