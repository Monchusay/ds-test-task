import React, {FC, useEffect} from 'react';
import style from "./PostList.module.css"
import {PostDataState} from "../../Store/UserPageReducer";
import {PreviewPostsDispatch} from "../UserProfilePage/PostPreview/PostPreviewContainer";
import {useParams} from "react-router-dom";
import axios from "axios";
import PostListItem from "./PostListItem/PostListItem";

const PostList: FC<PostDataState & PreviewPostsDispatch>  = (props) => {

    let { userId } = useParams<{ userId: string }>();

    useEffect(() => {
        axios
            .get(
                `https://my-json-server.typicode.com/Monchusay/ds-test-task/postData`
            )
            .then((response) => {
                props.setPosts(response.data);
            });
    }, []);

    let PostListElements = props.postData
        .filter((post) => post.senderId === Number(userId))
        .map((p) => (
            <PostListItem
                userId={userId}
                id={p.id}
                key={p.id}
                postPublishDate={p.postPublishDate}
                postHeader={p.postHeader}
                postPreview={p.postPreview}
            />
        ));

    return (
        <div className={style.PostList}>
            {PostListElements}
            </div>
    );
};

export default PostList;