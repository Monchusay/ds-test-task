import React, { FC, useEffect, useState } from "react";
import style from "./PostPreview.module.css";
import { Post, PostDataState } from "../../../Store/UserPageReducer";
import PostPreviewItem from "./PostPrevewItem/PostPreviewItem";
import axios from "axios";
import { PreviewPostsDispatch } from "./PostPreviewContainer";

const PostPreview: FC<PostDataState & PreviewPostsDispatch> = (props) => {

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Monchusay/ds-test-task/postData`).then((response) => {
            props.setPosts(response.data);
        });
    }, []);

    let PreviewPostElements = props.postData.map((p) => (
        <PostPreviewItem id={p.id} key={p.id} postPublishDate={p.postPublishDate} postHeader={p.postHeader} postPreview={p.postPreview}/>
    ))

  return (
    <div className={style.PostPreview}>
      <div className={style.PostPreviewHeader}>
        <span className={style.Header}>Посты</span>
      </div>
      <div className={style.PostPreviewBox}>
          {PreviewPostElements}
      </div>
    </div>
  );
};

export default PostPreview;
