import React from "react";
import { SyntheticEvent } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { formatLargeNumber } from "../../utils/numbers";
import { VIDEO_HEIGHT } from "../../constants";
import { StyledCard, StyledDiv, StyledIcon } from "./styles";

type Props = {
  videoURL: any;
  stats?: any;
};

const MediaCard = ({ videoURL, stats }: Props) => {
  return (
    <StyledCard>
      <CardMedia
        component="video"
        height={VIDEO_HEIGHT}
        image={videoURL}
        muted
        controls
        onMouseOver={(event: SyntheticEvent<HTMLVideoElement>) =>
          (event.target as HTMLVideoElement).play()
        }
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
