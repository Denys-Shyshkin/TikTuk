import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from "@mui/material/useMediaQuery";

import UserPost from "../UserPost";
import SkeletonPostsList from "../SkeletonPostsList";
import { MAX_POSTS, POSTS_PER_PAGE, MEDIA_QUERY } from "../../constants";
import { StyledGridContainer, StyledDiv } from "./styles";

const UserPostList = ({ data, isLoading }: any) => {
  const matches = useMediaQuery(MEDIA_QUERY);
  const displayedPosts = data?.slice(0, MAX_POSTS);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * POSTS_PER_PAGE;
  const firstPostindex = lastPostIndex - POSTS_PER_PAGE;
  const postsOnPage = displayedPosts.slice(firstPostindex, lastPostIndex);
  const [posts, setPosts] = useState(postsOnPage);

  useEffect(() => {
    setPosts(postsOnPage);
    window.scrollTo(0, 0);
  }, [data, currentPage]);

  if (isLoading || !data.length) {
    return <SkeletonPostsList />;
  }

  return (
    <div>
      <StyledGridContainer isMobile={matches} container spacing={1}>
        {posts?.map((mockedPost: any) => {
          return (
            <Grid key={mockedPost.id} item>
              <UserPost data={mockedPost} />
            </Grid>
          );
        })}
      </StyledGridContainer>
      <StyledDiv>
        <Pagination
          count={MAX_POSTS / POSTS_PER_PAGE}
          onClick={(event: any) => setCurrentPage(+event.target.innerText)}
        />
      </StyledDiv>
    </div>
  );
};

export default UserPostList;
