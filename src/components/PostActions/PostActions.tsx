import React from "react";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { formatLargeNumber } from "../../utils/numbers";
import { StyledDiv, StyledSection, StyledIconButton } from "./styles";

const PostActions = ({ diggCount, commentCount }: any) => {
  return (
    <StyledDiv>
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
