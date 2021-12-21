import React from 'react';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import useMediaQuery from '@mui/material/useMediaQuery';

import { MEDIA_QUERY } from '../../../../constants';
import { formatLargeNumber } from '../../../../utils/numbers';
import { StyledDiv, StyledSection, StyledIconButton } from './styles';

type Props = {
  diggCount: number
  commentCount: number
}

const PostActions = ({ diggCount, commentCount }: Props) => {
  const matches = useMediaQuery(MEDIA_QUERY);

  return (
    <StyledDiv isMobile={matches}>
      <StyledSection>
        <StyledIconButton size="large" aria-label="comments">
          <CommentIcon />
        </StyledIconButton>
        <Typography>{formatLargeNumber(commentCount)}</Typography>
      </StyledSection>
      <StyledSection>
        <StyledIconButton size="large" aria-label="Likes">
          <ThumbUpIcon />
        </StyledIconButton>
        <Typography>{formatLargeNumber(diggCount)}</Typography>
      </StyledSection>
    </StyledDiv>
  );
};

export default PostActions;
