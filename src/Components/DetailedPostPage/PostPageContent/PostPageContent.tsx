import React, { FC, useEffect, useState } from "react";
import style from "./PostPageContent.module.css";
import { Post, PostDataState } from "../../../Store/UserPageReducer";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPageContent: FC<PostDataState> = (props) => {

  const [content, setContent] = useState<Post | null>(null);
  let { id , userId } = useParams<{ id: string , userId: string}>();

  useEffect(() => {
    if (props.postData.length === 0) {
      axios
        .get(
          `https://my-json-server.typicode.com/Monchusay/ds-test-task/postData/${id}`
        )
        .then((response) => {
          setContent(response.data);
        });
    } else {
      setContent(props.postData.find((h) => h.id === Number(id)) || null);
    }
  }, [id]);

  return (
    <div className={style.PostPageContent}>
      <span className={style.Content}>{content?.fullPost}</span>
    </div>
  );
};

export default PostPageContent;
