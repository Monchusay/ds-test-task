import React, { FC, useEffect, useState } from "react";
import style from "./CommentsSection.module.css";
import CommentSectionItem from "./CommentSectionItem/CommentSectionItem";
import { CommentSectionState } from "../../../Store/UserPageReducer";
import { CommentsSectionDispatch } from "./CommentsSectionContainer";
import axios from "axios";
import AddCommentBox from "./AddCommentBox/AddCommentBox";
import { useParams } from "react-router-dom";

const CommentsSection: FC<CommentSectionState & CommentsSectionDispatch> = (
  props
) => {
  let { postId } = useParams<{ postId: string }>();

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

  let CommentSectionElements = props.commentData
    .filter((comment) => comment.postId === Number(postId))
    .map((c) => (
      <CommentSectionItem
        key={Math.random()}
        postId={c.postId}
        senderName={c.senderName}
        commentText={c.commentText}
      />
    ));

  let onSendComment = (newSenderName: string, newSentText: string) => {
    let comment = {
      postId: Number(postId),
      senderName: newSenderName,
      commentText: newSentText,
    };

    axios
        .post('https://my-json-server.typicode.com/Monchusay/ds-test-task/commentData', comment)
        .then((response) => {
          console.log(response)
        });

    props.addNewComment(comment)
    setCommentBox(false);
  };

  return (
    <div className={style.CommentsSection}>
      {CommentSectionElements}
      {commentBox ? (
        <AddCommentBox
          onSendComment={onSendComment}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
        />
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
