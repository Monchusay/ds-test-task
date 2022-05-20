import React from "react";
import style from "./UserProfilePage.module.css";
import ProfileCard from "./ProfileCard/ProfileCard";

const UserProfilePage = () => {
  return (
    <div className={style.UserProfilePage}>
      <ProfileCard />
    </div>
  );
};

export default UserProfilePage;
