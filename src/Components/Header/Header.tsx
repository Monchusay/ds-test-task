import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.HeaderSiteNameArea}>
        <NavLink to="/landingPage" className={style.SiteName}>CONCERT CLUB</NavLink>
      </div>
      <div className={style.HeaderButtonArea}>
        <button className={style.HeaderChangeStyle}>Версия для слабовидящих</button>
        <button className={style.HeaderMyProfile}>Мой профиль</button>
      </div>
    </div>
  );
};

export default Header;
