import React from "react";
import Grid from "@mui/material/Grid";

import UserPost from "../UserPost";
import { StyledGridContainer } from "./styles";

const UserPostList = ({ data }: any) => {
  return (
    <StyledGridContainer container spacing={1}>
      {data.map((mockedPost: any) => {
        return (
          <Grid id={mockedPost.id} item>
            <UserPost data={mockedPost} />
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default UserPostList;
