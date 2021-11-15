import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MyProfilePage from "./pages/MyProfilePage";
import TrendingPage from "./pages/TrendingPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppBar from "./components/MenuAppBar";
import UserProfilePage from "./pages/UserProfilePage";
import { Pages } from "./constants";

const mockedPost = {
  id: "7006694664724122881",
  text: "@twilight_elisa17 antworten 🥲 ein neuer Fail des Tages",
  authorMeta: {
    id: "6785823001336415238",
    nickName: "Jule",
    signature:
      "@xoteam Instagram: @kikakim Cooperation: kikakim.booking@gmail.com",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1631729678147590~c5_1080x1080.jpeg?x-expires=1636995600&x-signature=8Tj89gxxZhi52jdLf8PtiOo8PRg%3D",
    following: 88,
    fans: 24000000,
    heart: 626000000,
  },
  videoURL:
    "https://v39-eu.tiktokcdn.com/2aee5f85b9e3484da45980146c05d897/61927352/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111150848410101880322230101E786&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=",
  diggCount: 735400,
  commentCount: 4801,
  hashtags: [
    {
      id: "1666867608081413",
      name: "ouhmanalta",
    },
    {
      id: "21461361",
      name: "55555",
    },
    {
      id: "153828",
      name: "fy",
    },
    {
      id: "19336",
      name: "humor",
    },
  ],
};

const mockedData = Array(30).fill(mockedPost);

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://tiktok33.p.rapidapi.com/trending/feed", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tiktok33.p.rapidapi.com",
        "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Routes>
        <Route
          path={Pages.Feed}
          element={
            <TrendingPage
              posts={posts}
              isLoading={isLoading}
              isError={isError}
            />
          }
        />
        <Route path={Pages.Profile} element={<MyProfilePage />} />
        <Route
          path={Pages.User}
          element={<UserProfilePage posts={posts} isLoading={isLoading} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
