import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import FeedPost from "../FeedPost";
import { MAX_POSTS, POSTS_PER_PAGE } from "../../constants";
import { StyledGridContainer, StyledDiv } from "./styles";

const FeedPostsList = ({ data }: any) => {
  const displayedPosts = data.slice(0, MAX_POSTS);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * POSTS_PER_PAGE;
  const firstPostindex = lastPostIndex - POSTS_PER_PAGE;
  const postsOnPage = displayedPosts.slice(firstPostindex, lastPostIndex);
  const [posts, setPosts] = useState(postsOnPage);

  useEffect(() => {
    setPosts(postsOnPage);
  }, [currentPage]);

  return (
    <>
      <StyledGridContainer container justifyContent="center" spacing={4}>
        {posts.map((mockedPost: any) => {
          return (
            <Grid id={mockedPost.id} item xs="auto">
              <FeedPost data={mockedPost} />
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
    </>
  );
};

export default FeedPostsList;
