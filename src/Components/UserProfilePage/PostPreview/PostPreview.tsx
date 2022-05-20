import React, {FC, useEffect, useState} from "react";
import style from "./PostPreview.module.css";
import {Post, PostDataState} from "../../../Store/UserPageReducer";
import PostPreviewItem from "./PostPrevewItem/PostPreviewItem";
import axios from "axios";
import {useParams} from "react-router-dom";

const PostPreview: FC<PostDataState> = (props) => {

    const [post, setPost] = useState<Post | null>(null);
    let { id } = useParams<{ id: string }>();

    useEffect(() => {
            axios
                .get(`https://my-json-server.typicode.com/Monchusay/ds-test-task/postData/${id}`)
                .then((response) => {
                    setPost(response.data);
                });
         {
            setPost(props.postData.find((post) => post.id === Number(id)) || null);
        }
    }, [id]);

    return (
    <div className={style.PostPreview}>
      <div className={style.PostPreviewHeader}>
        <span className={style.Header}>Посты</span>
      </div>
      <div className={style.PostPreviewBox}>
          <PostPreviewItem
          key={post?.id}
          postHeader={post?.postHeader}
          postPreview={post?.postPreview}
          postPublishDate={post?.postPublishDate}
      />
      </div>
    </div>
  );
};

export default PostPreview;
