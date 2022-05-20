import React, {FC} from 'react';
import style from "./ListOfUsers.module.css"
import {UserPageState} from "../../../Store/UserPageReducer";
import ListOfUsersElements from "./ListOfUsersElement/ListOfUsersElement";

const ListOfUsers:FC <UserPageState> = (props) => {

    let ListOfUsersElement = props.userData.map((u) => (
        <ListOfUsersElements
            key={u.id}
            name={u.name}
            surname={u.surname}
            location={u.location}
        />
    ))

    return (
        <div className={style.ListOfUsers}>
            <div className={style.ListOfUsersHeader}>
                <span>
                    Купили билеты
                </span>
            </div>
            <div className={style.ListOfUsersContent}>
                {ListOfUsersElement}
            </div>
        </div>
    );
};

export default ListOfUsers;