import React from 'react';
import Skeleton from '@mui/material/Skeleton';

import { VIDEO_HEIGHT } from '../../../constants';

const SkeletonPostItem = () => {
  return <Skeleton variant="rectangular" width={225} height={+VIDEO_HEIGHT} />;
};

export default SkeletonPostItem;
