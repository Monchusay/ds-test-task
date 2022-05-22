import React, { FC } from "react";
import style from "./ListOfUsersElement.module.css";
import { NavLink } from "react-router-dom";
import {LinkToTop} from "../../../../Helpers/LinkToTop";

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
            <LinkToTop className={style.GoToProfileButton} to={`/user/${props.id}`}>
                Смотреть профиль
            </LinkToTop>
        </div>
    </div>
  );
};

export default ListOfUsersElements;
