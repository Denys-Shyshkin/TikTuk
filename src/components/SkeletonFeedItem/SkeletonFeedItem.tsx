import React from "react";
import Skeleton from "@mui/material/Skeleton";
import useMediaQuery from "@mui/material/useMediaQuery";

import { VIDEO_HEIGHT, MEDIA_QUERY } from "../../constants";
import {
  StyledStack,
  AvatarSkeleton,
  TextSkeleton,
  StyledDiv,
  StyledSection,
  IconSkeleton,
} from "./styles";

const SkeletonFeedItem = () => {
  const matches = useMediaQuery(MEDIA_QUERY);

  return (
    <StyledStack spacing={1}>
      <AvatarSkeleton variant="circular" width={40} height={40} />
      <div>
        <Skeleton variant="text" width={50} height={28} />
        <Skeleton variant="text" width={250} height={20} />
        <TextSkeleton variant="text" width={200} height={16} />
        <StyledDiv isMobile={matches}>
          <Skeleton variant="rectangular" width={225} height={+VIDEO_HEIGHT} />
          <StyledSection isMobile={matches}>
            <IconSkeleton variant="circular" width={48} height={48} />
            <IconSkeleton variant="circular" width={48} height={48} />
          </StyledSection>
        </StyledDiv>
      </div>
    </StyledStack>
  );
};

export default SkeletonFeedItem;
