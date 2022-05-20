import React from "react";
import style from "./LandingPage.module.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import AboutSite from "./AboutSite/AboutSite";
import AboutGroup from "./AboutGroup/AboutGroup";
import ListOfUsersContainer from "./ListOfUsers/ListOfUsersContainer";

const LandingPage = () => {
  return (
    <div className={style.LandingPage}>
      <ImageSlider />
      <ListOfUsersContainer />
      <AboutSite />
      <AboutGroup />
    </div>
  );
};

export default LandingPage;
