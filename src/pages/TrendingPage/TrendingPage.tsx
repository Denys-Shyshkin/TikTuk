import React from "react";

import FeedPostList from "../../components/FeedPostsList";

const TrendingPage = ({ mockedData }: any) => {
  return <FeedPostList data={mockedData} />;
};

export default TrendingPage;
