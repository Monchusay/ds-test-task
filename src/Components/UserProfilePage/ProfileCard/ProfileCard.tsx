import React from 'react';
import style from "./ProfileCard.module.css"

const ProfileCard = () => {

    return (
        <div className={style.ProfileCard}>
            <div className={style.ProfileCardNameBox}>
                <span className={style.ProfileCardName}></span>
            </div>
            <div className={style.ProfileCardInfo}>
                <span className={style.ProfileCardInfoBox}></span>
                <span className={style.ProfileCardInfoBox}></span>
                <span className={style.ProfileCardInfoBox}></span>
                <span className={style.ProfileCardInfoBoxSend}>Написать сообщение</span>
                <span className={style.ProfileCardInfoBoxInvite}>Предложить сходить на концерт</span>
            </div>
            </div>
    );
};

export default ProfileCard;