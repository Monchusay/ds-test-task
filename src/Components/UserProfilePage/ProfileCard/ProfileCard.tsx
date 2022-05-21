import React, {FC, useEffect, useState} from 'react';
import style from "./ProfileCard.module.css"
import {User, UserPageState} from "../../../Store/UserPageReducer";
import {useParams} from "react-router-dom";
import axios from "axios";

const ProfileCard:FC <UserPageState> = (props) => {

    const [user, setUser] = useState<User | null>(null);
    let { userId } = useParams<{ userId: string }>();

    useEffect(() => {
        if (props.userData.length === 0) {
            axios
                .get(`https://my-json-server.typicode.com/Monchusay/ds-test-task/userData/${userId}`)
                .then((response) => {
                setUser(response.data);
            });
        } else {
            setUser(props.userData.find((user) => user.id === Number(userId)) || null);
        }
    }, [userId]);

    return (
        <div className={style.ProfileCard}>
            <div className={style.ProfileCardNameBox}>
                <div className={style.ProfileCardName}><span className={style.UserName}>{user?.profileName}</span></div>
            </div>
            <div className={style.ProfileCardInfo}>
                <span className={style.ProfileCardInfoBox}>{user?.location}</span>
                <span className={style.ProfileCardInfoBox}>{user?.email}</span>
                <span className={style.ProfileCardInfoBox}>{user?.phone}</span>
                <span className={style.ProfileCardInfoBoxSend}>Написать сообщение</span>
                <span className={style.ProfileCardInfoBoxInvite}>Предложить сходить на концерт</span>
            </div>
            </div>
    );
};

export default ProfileCard;