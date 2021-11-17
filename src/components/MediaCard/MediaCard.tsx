import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { formatLargeNumber } from "../../utils/numbers";
import { VIDEO_HEIGHT } from "../../constants";
import { Stats } from "../../types/userFeedTypes";
import fallbackSrc from "../../assets/Tik-tok-logo.jpeg";
import { StyledCard, StyledDiv, StyledIcon } from "./styles";

type Props = {
  videoURL: string;
  isError: boolean;
  setIsError: (a: boolean) => void;
  stats?: Stats;
};

const MediaCard = ({ videoURL, isError, setIsError, stats }: Props) => {
  return (
    <StyledCard>
      <CardMedia
        component={isError ? "img" : "video"}
        height={VIDEO_HEIGHT}
        image={isError ? fallbackSrc : videoURL}
        muted
        controls
        autoPlay
        loop
        onError={() => setIsError(true)}
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
