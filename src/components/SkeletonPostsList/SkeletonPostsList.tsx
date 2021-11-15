import React from "react";
import Grid from "@mui/material/Grid";

import SkeletonPostItem from "../SkeletonPostItem";
import { POSTS_PER_PAGE } from "../../constants";
import { StyledGridContainer } from "./styles";

const SkeletonUserPosts = () => {
  const skeletonArray = Array(POSTS_PER_PAGE).fill(<SkeletonPostItem />);

  return (
    <StyledGridContainer container spacing={1}>
      {skeletonArray.map((skeletonItem, index) => {
        return (
          <Grid key={index} item>
            {skeletonItem}
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default SkeletonUserPosts;
