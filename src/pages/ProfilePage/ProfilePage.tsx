import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserCard from "../../components/UserCard";
import UserPostList from "../../components/UserPostList";
import ErrorAlert from "../../components/ErrorAlert";
import { UserInfo } from "../../types/userInfoTypes";
import { fetchData } from "../../api";
import { Endpoint, currentUser } from "../../api/constants";

const mockedPost = {
  id: "6949187520152358149",
  playAddr:
    "https://v58.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037/8864c8399a094c42886669ed4ae759a3/?VExpiration=1636987738&VSignature=rSSMAWLXn-1VXFBjF23pnQ&a=1180&br=2688&bt=1344&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111150848410101880322230101E786&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3F1cjc6Zm1oNzMzODgzNEApOzM7Z2Q2N2U2N2lkOzY4NWc2ZXA1cjRnYmxgLS1kLy1zczAzMTA0LS9jNjI0Ly1eX2E6Yw%3D%3D&vl=&vr=",
  stats: {
    playCount: 1300000,
  },
};

const mockedUser = {
  user: {
    id: "241418783272443904",
    nickName: "Dave XP",
    avatarLarger:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1637049600&x-signature=tKNOt%2FWxuhQwdrUWqOY9apDe%2Fs8%3D",
    signature: "🇨🇷 Animator from Costa Rica Get my app Dollify! 👇",
  },
  stats: {
    followerCount: 4800000,
    followingCount: 67,
    heart: 76300000,
  },
};

const mockedData = Array(30).fill(mockedPost);

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

  if (postsIsError || profileIsError) {
    return <ErrorAlert message={"Something Went Wrong..."} />;
  }

  if (Object.keys(profile).length === 0 && !profileIsLoading) {
    return <ErrorAlert message={"Oops... Page Not Found"} />;
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
