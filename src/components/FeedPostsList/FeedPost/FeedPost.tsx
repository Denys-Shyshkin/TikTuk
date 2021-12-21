import React from 'react';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import PostHeader from './PostHeader';
import MediaCard from '../../MediaCard';
import PostActions from './PostActions';
import { Pages, MEDIA_QUERY } from '../../../constants';
import { FeedPostItem } from '../../../types/trendingFeedTypes';
import { StyledAvatar, StyledDiv, StyledSection, StyledArticle } from './styles';

type Props = {
  data: FeedPostItem
  error: string | null
  setError: (a: string | null) => void
}

const FeedPost = ({ data, error, setError }: Props) => {
  const navigate = useNavigate();
  const matches = useMediaQuery(MEDIA_QUERY);

  const { id, text, authorMeta, videoUrl, diggCount, commentCount, hashtags } =
    data;

  const clickHandler = () => {
    navigate(`${Pages.Profile}/${authorMeta.name}`);
  };

  return (
    <StyledDiv>
      <StyledSection>
        <StyledAvatar
          alt={authorMeta.nickName}
          src={authorMeta.avatar}
          onClick={clickHandler}
        />
      </StyledSection>
      <section>
        <PostHeader
          nickName={authorMeta.nickName}
          text={text}
          hashtags={hashtags}
          onClick={clickHandler}
        />
        <StyledArticle isMobile={matches}>
          <MediaCard
            id={id}
            videoURL={videoUrl}
            error={error}
            setError={setError}
          />
          <PostActions diggCount={diggCount} commentCount={commentCount} />
        </StyledArticle>
      </section>
    </StyledDiv>
  );
};

export default FeedPost;
