import React, { FC, useEffect, useState } from "react";
import style from "./PostPageHeader.module.css";
import { Post, PostDataState } from "../../../Store/UserPageReducer";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPageHeader: FC<PostDataState> = (props) => {

  const [header, setHeader] = useState<Post | null>(null);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (props.postData.length === 0) {
      axios
        .get(
          `https://my-json-server.typicode.com/Monchusay/ds-test-task/postData/${id}`
        )
        .then((response) => {
          setHeader(response.data);
        });
    } else {
      setHeader(props.postData.find((h) => h.id === Number(id)) || null);
    }
  }, [id]);

  return (
    <div className={style.PostPageHeader}>
      <span className={style.Header}>{header?.postHeader}</span>
    </div>
  );
};

export default PostPageHeader;
