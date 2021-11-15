import React from "react";

import UserCard from "../../components/UserCard";
import SkeletonFeedList from "../../components/SkeletonFeedList";

const UserProfilePage = ({ posts, isLoading }: any) => {
  if (isLoading) {
    return <SkeletonFeedList />;
  }

  return <UserCard data={posts} />;
};

export default UserProfilePage;
