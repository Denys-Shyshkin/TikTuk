import React from 'react';

import MediaCard from '../../MediaCard';
import { UserFeedItem } from '../../../types/userFeedTypes';

type Props = {
  data: UserFeedItem
  error: string | null
  setError: (a: string | null) => void
}

const UserPost = ({ data, error, setError }: Props) => {
  const { id, video, stats } = data;

  return (
    <MediaCard
      id={id}
      videoURL={video.playAddr}
      error={error}
      setError={setError}
      stats={stats}
    />
  );
};

export default UserPost;
