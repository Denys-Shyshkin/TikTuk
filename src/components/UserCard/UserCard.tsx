import React, { ReactElement } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { formatLargeNumber } from "../../utils/numbers";
import {
  StyledCard,
  SpinnerCard,
  StyledProgress,
  StyledSection,
  StyledAvatar,
  StyledCardContent,
  StyledArticle,
} from "./styles";

type Props = {
  profile: any;
  isLoading: any;
};

const UserCard = ({ profile, isLoading }: Props): ReactElement | null => {
  if (isLoading) {
    return (
      <SpinnerCard>
        <StyledProgress size={100} thickness={2} />
      </SpinnerCard>
    );
  }

  const { user, stats } = profile;
  const { nickname, avatarLarger, signature } = user;
  const { followingCount, followerCount, heart } = stats;

  return (
    <StyledCard>
      <StyledSection>
        <StyledAvatar alt={nickname} src={avatarLarger} />
        <StyledCardContent>
          <Typography variant="h6" textAlign="center">
            {nickname}
          </Typography>
          <StyledArticle>
            <Typography variant="subtitle2" textAlign="center">
              {formatLargeNumber(followingCount)}&nbsp;
            </Typography>
            <Typography variant="caption" textAlign="center">
              Following
            </Typography>
          </StyledArticle>
          <StyledArticle>
            <Typography variant="subtitle2" textAlign="center">
              {formatLargeNumber(followerCount)}&nbsp;
            </Typography>
            <Typography variant="caption" textAlign="center">
              Followers
            </Typography>
          </StyledArticle>
          <StyledArticle>
            <Typography variant="subtitle2" textAlign="center">
              {formatLargeNumber(heart)}&nbsp;
            </Typography>
            <Typography variant="caption" textAlign="center">
              Likes
            </Typography>
          </StyledArticle>
        </StyledCardContent>
      </StyledSection>
      <CardContent>
        <Typography variant="subtitle2" textAlign="center">
          {signature}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default UserCard;
