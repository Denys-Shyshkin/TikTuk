import React from "react";
import Grid from "@mui/material/Grid";

import SkeletonFeedItem from "../SkeletonFeedItem";
import { POSTS_PER_PAGE } from "../../constants";
import { StyledGridContainer } from "./styles";

const SkeletonFeedList = () => {
  const skeletonArray = Array(POSTS_PER_PAGE).fill(<SkeletonFeedItem />);

  return (
    <StyledGridContainer container spacing={6}>
      {skeletonArray.map((seketonItem, index) => {
        return (
          <Grid key={index} item xs={12}>
            {seketonItem}
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default SkeletonFeedList;
