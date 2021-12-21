import React, { ReactElement } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { formatLargeNumber } from '../../utils/numbers';
import { UserInfo } from '../../types/userInfoTypes';
import { ErrorMessages } from '../../constants';
import {
  StyledCard,
  SpinnerCard,
  StyledProgress,
  StyledSection,
  StyledAvatar,
  StyledCardContent,
  StyledArticle,
  StyledTypography,
} from './styles';
import ErrorAlert from '../ErrorAlert';

type Props = {
  profile: UserInfo
  isLoading: boolean
}

const UserCard = ({ profile, isLoading }: Props): ReactElement => {
  if (isLoading) {
    return (
      <SpinnerCard>
        <StyledProgress size={100} thickness={2} />
      </SpinnerCard>
    );
  }

  if (!profile) {
    return <ErrorAlert message={ErrorMessages.UnknownError} />;
  }

  const { nickname, avatarLarger, signature } = profile.user;
  const { followingCount, followerCount, heart } = profile.stats;

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
        <StyledTypography variant="subtitle2" textAlign="center">
          {signature}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

export default UserCard;
