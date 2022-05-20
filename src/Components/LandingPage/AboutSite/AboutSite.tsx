import React from "react";
import style from "./AboutSite.module.css";
import SliderLine from "./SliderLine.svg";

const AboutSite = () => {
  return (
    <div className={style.AboutSite}>
      <div className={style.AboutSiteContent}>
        <div className={style.AboutSiteContentHeader}>
          <span>О площадке</span>
        </div>
        <div className={style.AboutSiteContentMainObj}>
          <div className={style.AboutSiteSlider}>
            <img src={SliderLine} />
          </div>
          <div className={style.AboutSiteContentMainObjContent}>
            <div className={style.AboutSiteContentMainObjHeader}>
              Современная площадка для проведения концертов и других мероприятий
              любой сложности.
            </div>
            <div className={style.AboutSiteContentMainObjText}>
              Мы предоставляем всю необходимую для организаторов инфраструктуру
              и готовые решения под все основные задачи любого события, а также
              современное оборудование, соответствующее самым высоким мировым
              стандартам.
            </div>
          </div>
        </div>
      </div>
      <div className={style.AboutSiteSubmitBox}>
        <div className={style.AboutSiteSubmitBoxHeader}>
          Оставить заявку на проведение концерта
        </div>
        <textarea className={style.AboutSiteSubmitBoxTextArea} placeholder="Расскажите о вашем предложении" />
        <div className={style.AboutSiteSubmitBoxB}>
          <button className={style.AboutSiteSubmitBoxButton}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;
