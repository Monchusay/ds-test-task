import React from "react";
import style from "./UserProfilePage.module.css";
import ProfileCardContainer from "./ProfileCard/ProfileCardContainer";

const UserProfilePage = () => {
  return (
    <div className={style.UserProfilePage}>
      <ProfileCardContainer />
    </div>
  );
};

export default UserProfilePage;
