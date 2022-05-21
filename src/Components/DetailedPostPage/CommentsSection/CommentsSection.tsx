import React from "react";
import style from "./CommentsSection.module.css";
import CommentSectionItem from "./CommentSectionItem/CommentSectionItem";

const CommentsSection = () => {
  return (
    <div className={style.CommentsSection}>
      <CommentSectionItem />
    </div>
  );
};

export default CommentsSection;
