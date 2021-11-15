import React from "react";
import Skeleton from "@mui/material/Skeleton";

import { VIDEO_HEIGHT } from "../../constants";
import {
  StyledStack,
  AvatarSkeleton,
  TextSkeleton,
  StyledDiv,
  StyledSection,
  IconSkeleton,
} from "./styles";

const SkeletonFeedItem = () => {
  return (
    <StyledStack spacing={1}>
      <AvatarSkeleton variant="circular" width={40} height={40} />
      <div>
        <Skeleton variant="text" width={50} height={28} />
        <Skeleton variant="text" width={300} height={20} />
        <TextSkeleton variant="text" width={200} height={16} />
        <StyledDiv>
          <Skeleton variant="rectangular" width={225} height={+VIDEO_HEIGHT} />
          <StyledSection>
            <IconSkeleton variant="circular" width={48} height={48} />
            <IconSkeleton variant="circular" width={48} height={48} />
          </StyledSection>
        </StyledDiv>
      </div>
    </StyledStack>
  );
};

export default SkeletonFeedItem;
