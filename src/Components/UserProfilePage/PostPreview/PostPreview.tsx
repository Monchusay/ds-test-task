import React, { FC } from "react";
import style from "./PostPreview.module.css";
import {PostDataState} from "../../../Store/UserPageReducer";
import PostPreviewItem from "./PostPrevewItem/PostPreviewItem";

const PostPreview: FC<PostDataState> = (props) => {

  let postPreviewElements = props.postData.map((p) => (
    <PostPreviewItem
      postHeader={p.postHeader}
      postPreview={p.postPreview}
      postPublishDate={p.postPublishDate}
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
