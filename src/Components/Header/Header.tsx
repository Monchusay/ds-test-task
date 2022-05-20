import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.HeaderSiteNameArea}>
        <span>CONCERT CLUB</span>
      </div>
      <div className={style.HeaderButtonArea}>
        <button className={style.HeaderChangeStyle}>Версия для слабовидящих</button>
        <button className={style.HeaderMyProfile}>Мой профиль</button>
      </div>
    </div>
  );
};

export default Header;
