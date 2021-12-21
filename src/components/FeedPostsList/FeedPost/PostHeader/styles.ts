import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { isMobile } from '../../../../constants';

interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
  isMobile?: boolean
}

const StyledDiv = styled('div', {
  shouldForwardProp: (prop) => prop !== isMobile,
})<StyledDivProps>(({ isMobile }) => ({
  maxWidth: isMobile ? 250 : 'auto',
}));

const StyledSection = styled('section')(() => ({
  marginTop: 5,
  marginBottom: 5,
}));

const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  ':hover': {
    cursor: 'pointer',
  },
}));

export { StyledDiv, StyledSection, StyledTypography };
