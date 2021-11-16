import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import SkeletonFeedItem from "../SkeletonFeedItem";
import { POSTS_PER_PAGE, MEDIA_QUERY } from "../../constants";
import { StyledGridContainer } from "./styles";

const SkeletonFeedList = () => {
  const matches = useMediaQuery(MEDIA_QUERY);

  const skeletonArray = Array(POSTS_PER_PAGE).fill(<SkeletonFeedItem />);

  return (
    <StyledGridContainer isMobile={matches} container spacing={6}>
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
