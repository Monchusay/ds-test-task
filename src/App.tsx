import React, { FC } from "react";
import style from "./App.module.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserProfilePage from "./Components/UserProfilePage/UserProfilePage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/user/:id" element={<UserProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
