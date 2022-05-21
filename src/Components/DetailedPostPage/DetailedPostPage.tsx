import React from "react";
import style from "./DetailedPostPage.module.css";
import PostPageHeaderContainer from "./PostPageHeader/PostPageHeaderContainer";
import PostPageContentContainer from "./PostPageContent/PostPageContentContainer";
import CommentsSection from "./CommentsSection/CommentsSection";

const DetailedPostPage = () => {
  return (
    <div className={style.DetailedPostPage}>
      <PostPageHeaderContainer />
      <PostPageContentContainer />
      <CommentsSection />
    </div>
  );
};

export default DetailedPostPage;
