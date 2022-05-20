import React, { FC } from "react";
import style from "./ListOfUsersElement.module.css";

const ListOfUsersElements: FC<{
  name: string;
  surname: string;
  location: string;
}> = (props) => {
  return (
    <div className={style.ListOfUsersElement}>
      <div className={style.UserName}>
        <span>{props.name}</span>
        <span className={style.UserSurname}>{props.surname}</span>
      </div>
      <span className={style.UserLocation}>{props.location}</span>
        <div className={style.GoToProfile}>
            <span className={style.GoToProfileButton}>
                Смотреть профиль
            </span>
        </div>
    </div>
  );
};

export default ListOfUsersElements;
