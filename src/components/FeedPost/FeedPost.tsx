import React from "react";
import { useNavigate } from "react-router-dom";

import PostHeader from "../PostHeader";
import MediaCard from "../MediaCard";
import PostActions from "../PostActions";
import { Pages } from "../../constants";
import {
  StyledAvatar,
  StyledDiv,
  StyledSection,
  StyledArticle,
} from "./styles";

const FeedPost = ({ data }: any) => {
  const navigate = useNavigate();

  const { text, authorMeta, videoUrl, diggCount, commentCount, hashtags } =
    data;

  const clickHandler = () => {
    navigate(`${Pages.Profile}/${authorMeta.id}`);
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
        <StyledArticle>
          <MediaCard videoURL={videoUrl} />
          <PostActions diggCount={diggCount} commentCount={commentCount} />
        </StyledArticle>
      </section>
    </StyledDiv>
  );
};

export default FeedPost;
