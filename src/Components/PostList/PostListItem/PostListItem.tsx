import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import style from "./PostListItem.module.css"
import {LinkToTop} from "../../../Helpers/LinkToTop";

const PostListItem: FC<{
    id: any;
    postPublishDate: any;
    postHeader: any;
    postPreview: any;
    userId: any;
}> = (props) => {
    return (
        <LinkToTop
            to={`/user/${props.userId}/post/${props.id}`}
            className={style.PostListItem}
        >
            <div className={style.PostListItemHeader}>
                <span className={style.Header}>{props.postHeader}</span>
                <span className={style.Date}>{props.postPublishDate}</span>
            </div>
            <span className={style.PostListItemContent}>{props.postPreview}</span>
        </LinkToTop>
    );
};

export default PostListItem;