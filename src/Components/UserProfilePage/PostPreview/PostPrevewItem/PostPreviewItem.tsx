import React, { FC } from "react";
import style from "./PostPreviewItem.module.css";
import { NavLink } from "react-router-dom";

const PostPreviewItem: FC<{
    id:any;
  postPublishDate: any;
  postHeader: any;
  postPreview: any;
}> = (props) => {
  return (
    <NavLink to={`/post/${props.id}`} className={style.PostPreviewItem}>
      <div className={style.PostPreviewItemHeader}>
        <span className={style.Header}>{props.postHeader}</span>
        <span className={style.Date}>{props.postPublishDate}</span>
      </div>
      <span className={style.PostPreviewItemContent}>{props.postPreview}</span>
    </NavLink>
  );
};

export default PostPreviewItem;
