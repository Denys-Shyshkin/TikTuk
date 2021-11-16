import React, { useEffect, useState } from "react";

import FeedPostList from "../../components/FeedPostsList";
import SkeletonFeedList from "../../components/SkeletonFeedList";
import ErrorAlert from "../../components/ErrorAlert";
import { fetchData } from "../../api";
import { Endpoint } from "../../api/constants";

const TrendingPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData(Endpoint.TrendingFeed, setIsLoading, setPosts, setIsError);
  }, []);

  if (isLoading) {
    return <SkeletonFeedList />;
  }

  if (isError) {
    return <ErrorAlert />;
  }

  return <FeedPostList data={posts} />;
};

export default TrendingPage;
