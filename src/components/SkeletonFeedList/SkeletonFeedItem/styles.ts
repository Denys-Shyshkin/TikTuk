import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

import { isMobile } from '../../../constants';

const StyledStack = styled(Stack)<StackProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

const AvatarSkeleton = styled(Skeleton)<SkeletonProps>(() => ({
  margin: 10,
}));

const TextSkeleton = styled(Skeleton)<SkeletonProps>(() => ({
  marginBottom: 5,
}));

interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
  isMobile?: boolean
}

const StyledDiv = styled('article', {
  shouldForwardProp: (prop) => prop !== isMobile,
})<StyledDivProps>(({ isMobile }) => ({
  display: isMobile ? 'block' : 'flex',
  alignItems: 'end',
}));

const StyledSection = styled('div', {
  shouldForwardProp: (prop) => prop !== isMobile,
})<StyledDivProps>(({ isMobile }) => ({
  display: isMobile ? 'none' : 'flex',
  flexDirection: 'column',
}));

const IconSkeleton = styled(Skeleton)<SkeletonProps>(() => ({
  margin: 5,
}));

export {
  StyledStack,
  AvatarSkeleton,
  TextSkeleton,
  StyledDiv,
  StyledSection,
  IconSkeleton,
};
