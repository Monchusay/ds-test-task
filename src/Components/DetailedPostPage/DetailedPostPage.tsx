import React from "react";
import style from "./DetailedPostPage.module.css";
import PostPageHeaderContainer from "./PostPageHeader/PostPageHeaderContainer";
import PostPageContentContainer from "./PostPageContent/PostPageContentContainer";
import CommentsSectionContainer from "./CommentsSection/CommentsSectionContainer";

const DetailedPostPage = () => {
    return (
    <div className={style.DetailedPostPage}>
      <PostPageHeaderContainer />
      <PostPageContentContainer />
      <CommentsSectionContainer />
    </div>
  );
};

export default DetailedPostPage;
