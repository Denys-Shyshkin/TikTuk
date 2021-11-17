import React, { useState, useEffect, MouseEvent } from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from "@mui/material/useMediaQuery";

import UserPost from "./UserPost";
import SkeletonPostsList from "../SkeletonPostsList";
import {
  MAX_POSTS,
  POSTS_PER_PAGE,
  MEDIA_QUERY,
  ErrorMessages,
} from "../../constants";
import { UserFeedList, UserFeedItem } from "../../types/userFeedTypes";
import { StyledGridContainer, StyledDiv } from "./styles";
import ErrorAlert from "../ErrorAlert";

type Props = {
  data: UserFeedList;
  isLoading: boolean;
};

const UserPostList = ({ data, isLoading }: Props) => {
  const [error, setError] = useState<string | null>(null);

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

  const clickHandler = (event: MouseEvent) => {
    const clickTarget = event.target as HTMLElement;
    setCurrentPage(+clickTarget.innerText);
  };

  return (
    <div>
      {error && <ErrorAlert message={ErrorMessages.VideoError} />}
      <StyledGridContainer isMobile={matches} container spacing={1}>
        {posts.map((userPost: UserFeedItem) => {
          return (
            <Grid key={userPost.id} item>
              <UserPost data={userPost} error={error} setError={setError} />
            </Grid>
          );
        })}
      </StyledGridContainer>
      <StyledDiv>
        <Pagination
          count={MAX_POSTS / POSTS_PER_PAGE}
          onClick={(event) => clickHandler(event)}
        />
      </StyledDiv>
    </div>
  );
};

export default UserPostList;
