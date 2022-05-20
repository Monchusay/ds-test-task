import React from "react";
import style from "./ImageSlider.module.css";
import LeftArrow from "./Arrow1.svg";

const ImageSlider = () => {
  return (
    <div className={style.LandingPageImageSlider}>
      <div className={style.LandingPageImageSliderContent}>
        <span className={style.LandingPageImageSliderContentHeader}>
          Twenty One Pilots
        </span>
        <span className={style.LandingPageImageSliderContentTime}>
          22.02.23 в 21:00
        </span>
      </div>
      <div className={style.LandingPageImageSliderNav}>
        <div className={style.LandingPageImageSliderNavArrowBox}>
          <img src={LeftArrow} />
        </div>
        <button className={style.LandingPageImageSliderNavBuyButton}>
          Купить билет
        </button>
        <div className={style.LandingPageImageSliderNavArrowBox}>
          <img className={style.RightArrow} src={LeftArrow} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
