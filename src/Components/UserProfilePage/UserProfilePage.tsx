import React from "react";
import style from "./UserProfilePage.module.css";
import ProfileCardContainer from "./ProfileCard/ProfileCardContainer";
import PostPreviewContainer from "./PostPreview/PostPreviewContainer";
import Publications from "./ Publications/Publications";

const UserProfilePage = () => {
  return (
    <div className={style.UserProfilePage}>
      <ProfileCardContainer />
      <PostPreviewContainer />
      <Publications />
    </div>
  );
};

export default UserProfilePage;
