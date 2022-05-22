import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {LinkToTop} from "../../Helpers/LinkToTop";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.HeaderSiteNameArea}>
        <LinkToTop to="" className={style.SiteName}>CONCERT CLUB</LinkToTop>
      </div>
      <div className={style.HeaderButtonArea}>
        <button className={style.HeaderChangeStyle}>Версия для слабовидящих</button>
        <button className={style.HeaderMyProfile}>Мой профиль</button>
      </div>
    </div>
  );
};

export default Header;
