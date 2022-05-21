import React from "react";
import style from "./DetailedPostPage.module.css";
import PostPageHeaderContainer from "./PostPageHeader/PostPageHeaderContainer";
import PostPageContentContainer from "./PostPageContent/PostPageContentContainer";

const DetailedPostPage = () => {

  return (
    <div className={style.DetailedPostPage}>
      <PostPageHeaderContainer />
      <PostPageContentContainer />
    </div>
  );
};

export default DetailedPostPage;
