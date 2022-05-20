import React from "react";
import style from "./AboutGroup.module.css";

const AboutGroup = () => {
  return (
    <div className={style.AboutGroup}>
      <div className={style.AboutGroupHeader}>О группе</div>
      <div className={style.AboutGroupContent}>
        Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа
        образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и
        Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One
        Pilots в 2009 и Regional at Best в 2011.
      </div>
    </div>
  );
};

export default AboutGroup;
