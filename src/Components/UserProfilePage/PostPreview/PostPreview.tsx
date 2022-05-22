import React, { FC, useEffect } from "react";
import style from "./PostPreview.module.css";
import { PostDataState } from "../../../Store/UserPageReducer";
import PostPreviewItem from "./PostPrevewItem/PostPreviewItem";
import axios from "axios";
import { PreviewPostsDispatch } from "./PostPreviewContainer";
import { NavLink, useParams } from "react-router-dom";

const PostPreview: FC<PostDataState & PreviewPostsDispatch> = (props) => {

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

  let PreviewPostElements = props.postData
    .filter((post) => post.senderId === Number(userId))
    .slice(0, 3)
    .map((p) => (
      <PostPreviewItem
        userId={userId}
        id={p.id}
        key={p.id}
        postPublishDate={p.postPublishDate}
        postHeader={p.postHeader}
        postPreview={p.postPreview}
      />
    ));

  return (
    <div className={style.PostPreview}>
      <div className={style.PostPreviewHeader}>
        <span className={style.Header}>Посты</span>
        <NavLink to={`/user/${userId}/postList/`} className={style.SeePosts}>
          {" "}
          Просмотреть все
        </NavLink>
      </div>
      <div className={style.PostPreviewBox}>{PreviewPostElements}</div>
    </div>
  );
};

export default PostPreview;
