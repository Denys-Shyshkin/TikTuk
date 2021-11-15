import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import NotFoundPage from "../../pages/NotFoundPage";
import { formatLargeNumber } from "../../utils/numbers";
import {
  StyledCard,
  StyledSection,
  StyledAvatar,
  StyledArticle,
} from "./styles";

type Props = {
  data?: any;
  profile?: any;
};

export default function BasicCard({ data, profile }: Props) {
  const params = useParams();

  const chosenUser = data?.find(
    (post: any) => post.authorMeta.id === params.userId
  );

  if (!profile && !chosenUser) {
    return <NotFoundPage />;
  }

  const displayedData = {
    avatar: chosenUser
      ? chosenUser.authorMeta.avatar
      : profile.user.avatarLarger,
    nickName: chosenUser
      ? chosenUser.authorMeta.nickName
      : profile.user.nickName,
    following: chosenUser
      ? chosenUser.authorMeta.following
      : profile.stats.followingCount,
    followers: chosenUser
      ? chosenUser.authorMeta.fans
      : profile.stats.followerCount,
    likes: chosenUser ? chosenUser.authorMeta.heart : profile.stats.heart,
    signature: chosenUser
      ? chosenUser.authorMeta.signature
      : profile.user.signature,
  };

  return (
    <StyledCard>
      <StyledSection>
        <StyledAvatar alt={displayedData.nickName} src={displayedData.avatar} />
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {displayedData.nickName}
          </Typography>
          <StyledArticle>
            <Typography variant="subtitle2" textAlign="center">
              {formatLargeNumber(displayedData.following)}&nbsp;
            </Typography>
            <Typography variant="caption" textAlign="center">
              Following
            </Typography>
          </StyledArticle>
          <StyledArticle>
            <Typography variant="subtitle2" textAlign="center">
              {formatLargeNumber(displayedData.followers)}&nbsp;
            </Typography>
            <Typography variant="caption" textAlign="center">
              Followers
            </Typography>
          </StyledArticle>
          <StyledArticle>
            <Typography variant="subtitle2" textAlign="center">
              {formatLargeNumber(displayedData.likes)}&nbsp;
            </Typography>
            <Typography variant="caption" textAlign="center">
              Likes
            </Typography>
          </StyledArticle>
        </CardContent>
      </StyledSection>
      <CardContent>
        <Typography variant="subtitle2" textAlign="center">
          {displayedData.signature}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}