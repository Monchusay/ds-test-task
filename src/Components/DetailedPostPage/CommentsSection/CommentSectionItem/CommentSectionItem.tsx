import React, {FC} from 'react';
import style from "./CommentSectionItem.module.css"

const CommentSectionItem:FC<{senderName:string,commentText:string,postId:number}> = (props) => {
    return (
        <div className={style.CommentSectionItem}>
            {props.senderName}{props.commentText}
            </div>
    );
};

export default CommentSectionItem;