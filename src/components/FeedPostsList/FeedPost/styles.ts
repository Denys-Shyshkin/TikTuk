import React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import { isMobile } from '../../../constants';

const StyledAvatar = styled(Avatar)<AvatarProps>(() => ({
  margin: 10,
  ':hover': {
    cursor: 'pointer',
  },
}));

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  width: '100%',
}));

const StyledSection = styled('section')(() => ({
  display: 'flex',
}));

interface StyledArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  isMobile?: boolean
}

const StyledArticle = styled('article', {
  shouldForwardProp: (prop) => prop !== isMobile,
})<StyledArticleProps>(({ isMobile }) => ({
  display: isMobile ? 'block' : 'flex',
  alignItems: 'end',
}));

export { StyledAvatar, StyledDiv, StyledSection, StyledArticle };
