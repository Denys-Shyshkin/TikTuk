import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import UserPost from "../UserPost";
import SkeletonPostsList from "../SkeletonPostsList";
import { MEDIA_QUERY } from "../../constants";
import { StyledGridContainer } from "./styles";

const UserPostList = ({ data, isLoading }: any) => {
  const matches = useMediaQuery(MEDIA_QUERY);

  if (isLoading || !data.length) {
    return <SkeletonPostsList />;
  }

  return (
    <StyledGridContainer isMobile={matches} container spacing={1}>
      {data?.map((mockedPost: any) => {
        return (
          <Grid key={mockedPost.id} item>
            <UserPost data={mockedPost} />
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default UserPostList;
