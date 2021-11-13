import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProfilePage from "./pages/ProfilePage";
import TrendingPage from "./pages/TrendingPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Trending</Link>
          <Link to="profile">Profile</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<TrendingPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
