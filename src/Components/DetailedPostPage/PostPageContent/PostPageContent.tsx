import React, { FC, useEffect, useState } from "react";
import style from "./PostPageContent.module.css";
import { Post, PostDataState } from "../../../Store/UserPageReducer";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPageContent: FC<PostDataState> = (props) => {

  const [content, setContent] = useState<Post | null>(null);
  let { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    if (props.postData.length === 0) {
      axios
        .get(
          `https://my-json-server.typicode.com/Monchusay/ds-test-task/postData/${postId}`
        )
        .then((response) => {
          setContent(response.data);
        });
    } else {
      setContent(props.postData.find((h) => h.id === Number(postId)) || null);
    }
  }, [postId]);

  return (
    <div className={style.PostPageContent}>
      <span className={style.Content}>{content?.fullPost}</span>
    </div>
  );
};

export default PostPageContent;
