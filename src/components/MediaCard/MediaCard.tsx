import React, { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { formatLargeNumber } from '../../utils/numbers';
import { VIDEO_HEIGHT } from '../../constants';
import { Stats } from '../../types/userFeedTypes';
import fallbackSrc from '../../assets/Tik-tok-logo.jpeg';
import { StyledCard, StyledDiv, StyledIcon } from './styles';

type Props = {
  id: string
  videoURL: string
  error: string | null
  setError: (a: string | null) => void
  stats?: Stats
}

const MediaCard = ({ id, videoURL, error, setError, stats }: Props) => {
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (id === error) {
      setFallback(true);
    }
  }, [id, error]);

  return (
    <StyledCard>
      <CardMedia
        component={fallback ? 'img' : 'video'}
        height={VIDEO_HEIGHT}
        image={fallback ? fallbackSrc : videoURL}
        muted
        controls
        autoPlay
        loop
        onError={() => setError(id)}
      />
      {stats && (
        <StyledDiv>
          <StyledIcon />
          <Typography color="white">
            {formatLargeNumber(stats.playCount)}
          </Typography>
        </StyledDiv>
      )}
    </StyledCard>
  );
};

export default MediaCard;
