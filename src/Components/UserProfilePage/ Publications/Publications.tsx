import React from "react";
import style from "./Publications.module.css";

const Publications = () => {
  return (
    <div className={style.Publications}>
      <div className={style.PublicationsHeader}>Публикации</div>
      <div className={style.PublicationsContent}>
        <div className={style.PublicationsItem1}></div>
        <div className={style.PublicationsItem2}></div>
        <div className={style.PublicationsItem3}></div>
        <div className={style.PublicationsItem4}></div>
        <div className={style.PublicationsItem5}></div>
        <div className={style.PublicationsItem6}></div>
      </div>
    </div>
  );
};

export default Publications;
