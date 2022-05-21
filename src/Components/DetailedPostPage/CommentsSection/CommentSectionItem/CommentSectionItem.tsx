import React, { FC } from "react";
import style from "./CommentSectionItem.module.css";

const CommentSectionItem: FC<{
  senderName: string;
  commentText: string;
  postId: number;
}> = (props) => {
  return (
    <div className={style.CommentSectionItem}>
      <span className={style.SenderName}>{props.senderName}</span>
      <span className={style.CommentText}>{props.commentText}</span>
    </div>
  );
};

export default CommentSectionItem;
