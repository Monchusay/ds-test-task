import React, {FC, useEffect} from "react";
import style from "./CommentsSection.module.css";
import CommentSectionItem from "./CommentSectionItem/CommentSectionItem";
import { CommentSectionState } from "../../../Store/UserPageReducer";
import { CommentsSectionDispatch } from "./CommentsSectionContainer";
import axios from "axios";

const CommentsSection: FC<CommentSectionState & CommentsSectionDispatch> = (
  props
) => {

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Monchusay/ds-test-task/commentData`).then((response) => {
            props.setComments(response.data);
        });
    }, []);

    let CommentSectionElement = props.commentData.map((c)=> (
        <CommentSectionItem
            key={Math.random()}
            postId={c.postId}
            senderName={c.senderName}
            commentText={c.commentText}
        />
    ))
    return (
    <div className={style.CommentsSection}>
        {CommentSectionElement}
    </div>
  );
};

export default CommentsSection;
