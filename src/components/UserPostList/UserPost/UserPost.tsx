import React from "react";

import MediaCard from "../../MediaCard";
import { UserFeedItem } from "../../../types/userFeedTypes";

type Props = {
  data: UserFeedItem;
  isError: boolean;
  setIsError: (a: boolean) => void;
};

const UserPost = ({ data, isError, setIsError }: Props) => {
  const { video, stats } = data;

  return (
    <MediaCard
      videoURL={video.playAddr}
      isError={isError}
      setIsError={setIsError}
      stats={stats}
    />
  );
};

export default UserPost;
