import React from "react";

import MediaCard from "../../MediaCard";
import { UserFeedItem } from "../../../types/userFeedTypes";

type Props = {
  data: UserFeedItem;
};

const UserPost = ({ data }: Props) => {
  const { video, stats } = data;

  return <MediaCard videoURL={video.playAddr} stats={stats} />;
};

export default UserPost;
