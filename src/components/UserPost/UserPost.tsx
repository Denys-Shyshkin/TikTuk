import React from "react";

import MediaCard from "../MediaCard";

const UserPost = ({ data }: any) => {
  const { playAddr, stats } = data;

  return <MediaCard videoURL={playAddr} stats={stats} />;
};

export default UserPost;
