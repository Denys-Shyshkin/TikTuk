import React, { useState, useEffect, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';

import FeedPost from './FeedPost';
import {
  MAX_POSTS,
  POSTS_PER_PAGE,
  MEDIA_QUERY,
  ErrorMessages,
} from '../../constants';
import { TrendingFeedList, FeedPostItem } from '../../types/trendingFeedTypes';
import { StyledGridContainer, StyledDiv } from './styles';
import ErrorAlert from '../ErrorAlert';

type Props = {
  data: TrendingFeedList
}

const FeedPostsList = ({ data }: Props) => {
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

  const clickHandler = (event: MouseEvent) => {
    const clickTarget = event.target as HTMLElement;
    setCurrentPage(+clickTarget.innerText);
  };

  return (
    <div>
      {error && <ErrorAlert message={ErrorMessages.VideoError} />}
      <StyledGridContainer isMobile={matches} container spacing={6}>
        {posts.map((post: FeedPostItem) => {
          return (
            <Grid key={post.id} item xs={12}>
              <FeedPost data={post} error={error} setError={setError} />
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

export default FeedPostsList;
