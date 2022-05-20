import React from "react";
import style from "./UserProfilePage.module.css";
import ProfileCardContainer from "./ProfileCard/ProfileCardContainer";
import PostPreviewContainer from "./PostPreview/PostPreviewContainer";

const UserProfilePage = () => {
  return (
    <div className={style.UserProfilePage}>
      <ProfileCardContainer />
      <PostPreviewContainer />
    </div>
  );
};

export default UserProfilePage;
