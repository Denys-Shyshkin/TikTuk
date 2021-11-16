import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import SkeletonPostItem from "../SkeletonPostItem";
import { POSTS_PER_PAGE, MEDIA_QUERY } from "../../constants";
import { StyledGridContainer } from "./styles";

const SkeletonUserPosts = () => {
  const matches = useMediaQuery(MEDIA_QUERY);

  const skeletonArray = Array(POSTS_PER_PAGE).fill(<SkeletonPostItem />);

  return (
    <StyledGridContainer isMobile={matches} container spacing={1}>
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
