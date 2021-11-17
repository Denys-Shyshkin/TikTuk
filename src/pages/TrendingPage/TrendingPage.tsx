import React, { useEffect, useState } from "react";

import FeedPostList from "../../components/FeedPostsList";
import SkeletonFeedList from "../../components/SkeletonFeedList";
import { renderErrorAlert } from "../../components/ErrorAlert/ErrorAlert";
import { TrendingFeedList, ErrorObject } from "../../types/trendingFeedTypes";
import { fetchData } from "../../api";
import { Endpoint } from "../../api/constants";

const TrendingPage = () => {
  const [posts, setPosts] = useState<TrendingFeedList | ErrorObject>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(
      Endpoint.TrendingFeed,
      controller,
      setIsLoading,
      setPosts,
      setIsError
    );
    return () => controller.abort();
  }, []);

  console.log(posts);

  if ((!Array.isArray(posts) || isError) && !isLoading) {
    return renderErrorAlert(posts as ErrorObject);
  }

  if (isLoading) {
    return <SkeletonFeedList />;
  }

  return <FeedPostList data={posts as TrendingFeedList} />;
};

export default TrendingPage;
