import React, { FC } from "react";
import style from "./ListOfUsersElement.module.css";
import { NavLink } from "react-router-dom";

const ListOfUsersElements: FC<{
  name: string;
  surname: string;
  location: string;
  id:number;
}> = (props) => {
  return (
    <div className={style.ListOfUsersElement}>
      <div className={style.UserName}>
        <span>{props.name}</span>
        <span className={style.UserSurname}>{props.surname}</span>
      </div>
      <span className={style.UserLocation}>{props.location}</span>
        <div className={style.GoToProfile}>
            <NavLink className={style.GoToProfileButton} to={`/user/${props.id}`}>
                Смотреть профиль
            </NavLink>
        </div>
    </div>
  );
};

export default ListOfUsersElements;
