import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserCard from "../../components/UserCard";
import UserPostList from "../../components/UserPostList";
import ErrorAlert, {
  renderErrorAlert,
} from "../../components/ErrorAlert/ErrorAlert";
import { ErrorMessages } from "../../constants";
import { UserInfo } from "../../types/userInfoTypes";
import { ErrorObject } from "../../types/trendingFeedTypes";
import { fetchData } from "../../api";
import { Endpoint, currentUser } from "../../api/constants";

const ProfilePage = () => {
  const params = useParams();
  const chosenUser = params.uniqueId;
  const user = chosenUser ? chosenUser : currentUser;

  const [profile, setProfile] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  const [postsIsLoading, setPostsIsLoading] = useState(false);
  const [profileIsLoading, setProfileIsLoading] = useState(false);

  const [postsIsError, setPostsIsError] = useState(false);
  const [profileIsError, setProfileIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(
      Endpoint.UserFeed + user,
      controller,
      setPostsIsLoading,
      setUserPosts,
      setPostsIsError
    );
    return () => controller.abort();
  }, [user]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(
      Endpoint.UserInfo + user,
      controller,
      setProfileIsLoading,
      setProfile,
      setProfileIsError
    );
    return () => controller.abort();
  }, [user]);

  if (
    Object.keys(profile).includes("message") ||
    postsIsError ||
    profileIsError
  ) {
    return renderErrorAlert(profile as ErrorObject);
  }

  if (Object.keys(profile).length === 0 && !profileIsLoading) {
    return <ErrorAlert message={ErrorMessages.WrongPage} />;
  }

  if (!Array.isArray(userPosts)) {
    const userFeed = require("../../user-feed.json");
    setUserPosts(userFeed.itemList);
  }

  return (
    <div>
      <UserCard profile={profile as UserInfo} isLoading={profileIsLoading} />
      <UserPostList data={userPosts} isLoading={postsIsLoading} />
    </div>
  );
};

export default ProfilePage;
