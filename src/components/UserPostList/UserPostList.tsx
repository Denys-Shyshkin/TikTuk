import React from "react";
import Grid from "@mui/material/Grid";

import UserPost from "../UserPost";
import SkeletonPostsList from "../SkeletonPostsList";
import { StyledGridContainer } from "./styles";

const UserPostList = ({ data, isLoading }: any) => {
  if (isLoading || !data.length) {
    return <SkeletonPostsList />;
  }

  return (
    <StyledGridContainer container spacing={1}>
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
