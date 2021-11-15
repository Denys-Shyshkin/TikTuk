import React from "react";

import FeedPostList from "../../components/FeedPostsList";
import SkeletonFeedList from "../../components/SkeletonFeedList";
import ErrorAlert from "../../components/ErrorAlert";

const TrendingPage = ({ posts, isLoading, isError }: any) => {
  if (isLoading) {
    return <SkeletonFeedList />;
  }

  if (isError) {
    return <ErrorAlert />;
  }

  return <FeedPostList data={posts} />;
};

export default TrendingPage;
