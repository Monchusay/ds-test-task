import React, { FC } from "react";
import style from "./PostPreviewItem.module.css";

const PostPreviewItem: FC<{
  postPublishDate: any;
  postHeader: any;
  postPreview: any;
}> = (props) => {
  return (
    <div className={style.PostPreviewItem}>
      <div className={style.PostPreviewItemHeader}>
        <span className={style.Header}>{props.postHeader}</span>
        <span className={style.Date}>{props.postPublishDate}</span>
      </div>
      <span className={style.PostPreviewItemContent}>{props.postPreview}</span>
    </div>
  );
};

export default PostPreviewItem;
