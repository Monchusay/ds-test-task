import React, { FC, useEffect, useState } from "react";
import style from "./PostPageHeader.module.css";
import { Post, PostDataState } from "../../../Store/UserPageReducer";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPageHeader: FC<PostDataState> = (props) => {

  const [header, setHeader] = useState<Post | null>(null);

  let { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    if (props.postData.length === 0) {
      axios
        .get(
          `https://my-json-server.typicode.com/Monchusay/ds-test-task/postData/${postId}`
        )
        .then((response) => {
          setHeader(response.data);
        });
    } else {
      setHeader(props.postData.find((h) => h.id === Number(postId)) || null);
    }
  }, [postId]);

  return (
    <div className={style.PostPageHeader}>
      <span className={style.Header}>{header?.postHeader}</span>
    </div>
  );
};

export default PostPageHeader;
