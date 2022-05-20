import React, {FC, useEffect} from 'react';
import style from "./ListOfUsers.module.css"
import {UserPageState} from "../../../Store/UserPageReducer";
import ListOfUsersElements from "./ListOfUsersElement/ListOfUsersElement";
import axios from "axios";
import {ListOfUsersDispatch} from "./ListOfUsersContainer";

const ListOfUsers:FC <UserPageState & ListOfUsersDispatch> = (props) => {

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Monchusay/ds-test-task/userData`).then((response) => {
            props.setUsers(response.data);
        });
    }, []);

    let ListOfUsersElement = props.userData.map((u) => (
        <ListOfUsersElements
            key={u.id}
            name={u.name}
            surname={u.surname}
            location={u.location}
            id={u.id}
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