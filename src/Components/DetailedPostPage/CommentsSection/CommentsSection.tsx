import React, { FC, useEffect, useState } from "react";
import style from "./CommentsSection.module.css";
import CommentSectionItem from "./CommentSectionItem/CommentSectionItem";
import { CommentSectionState } from "../../../Store/UserPageReducer";
import { CommentsSectionDispatch } from "./CommentsSectionContainer";
import axios from "axios";
import AddCommentBox from "./AddCommentBox/AddCommentBox";

const CommentsSection: FC<CommentSectionState & CommentsSectionDispatch> = (
  props
) => {
  const [commentBox, setCommentBox] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/Monchusay/ds-test-task/commentData`
      )
      .then((response) => {
        props.setComments(response.data);
      });
  }, []);

  let CommentSectionElements = props.commentData.map((c) => (
    <CommentSectionItem
      key={Math.random()}
      postId={c.postId}
      senderName={c.senderName}
      commentText={c.commentText}
    />
  ));

  return (
    <div className={style.CommentsSection}>
      {CommentSectionElements}
      {commentBox ? (
        <AddCommentBox commentBox={commentBox} setCommentBox={setCommentBox}/>
      ) : (
        <button
          className={style.SendCommentButton}
          onClick={() => setCommentBox(true)}
        >
          Оставить комментарий
        </button>
      )}
    </div>
  );
};

export default CommentsSection;
