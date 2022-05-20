import React, { FC } from "react";
import style from "./PostPreview.module.css";
import { UserPageState } from "../../../Store/UserPageReducer";
import PostPreviewItem from "./PostPrevewItem/PostPreviewItem";

const PostPreview: FC<UserPageState> = (props) => {

  let postPreviewElements = props.userData.map((p) => (
    <PostPreviewItem
      postHeader={p.postData.postHeader}
      postPreview={p.postData.postPreview}
      postPublishDate={p.postData.postPublishDate}
    />
  ));
  return (
    <div className={style.PostPreview}>
      <div className={style.PostPreviewHeader}>
        <span className={style.Header}>Посты</span>
      </div>
      <div className={style.PostPreviewBox}>{postPreviewElements}</div>
    </div>
  );
};

export default PostPreview;
