import React, { FC } from "react";
import style from "./App.module.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserProfilePage from "./Components/UserProfilePage/UserProfilePage";
import DetailedPostPage from "./Components/DetailedPostPage/DetailedPostPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/user/:userId" element={<UserProfilePage />} />
          <Route path="/user/:userId/post/:postId" element={<DetailedPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
