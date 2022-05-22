import React, { FC } from "react";
import style from "./App.module.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserProfilePage from "./Components/UserProfilePage/UserProfilePage";
import DetailedPostPage from "./Components/DetailedPostPage/DetailedPostPage";
import PostListContainer from "./Components/PostList/PostListContainer";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/*" element={<LandingPage />} />
            <Route path="/user/:userId" element={<UserProfilePage />} />
            <Route
              path="/user/:userId/post/:postId"
              element={<DetailedPostPage />}
            />
            <Route
              path="/user/:userId/postList"
              element={<PostListContainer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
