let initialState: UserPageState & PostDataState & CommentSectionState = {
  userData: [],
  postData: [],
  commentData: [],
};

export interface User {
  name: string;
  surname: string;
  location: string;
  id: number;
  email: string;
  phone: string;
  profileName: string;
}
export interface Post {
  fullPost: string;
  postHeader: string;
  postPreview: string;
  postPublishDate: string;
  senderId: number;
  id: number;
}

export interface Comment {
  postId: number;
  senderName: string;
  commentText: string;
}

export interface UserPageState {
  userData: User[];
}
export interface PostDataState {
  postData: Post[];
}
export interface CommentSectionState {
  commentData: Comment[];
}

type ActionTypes =
  | "SET_USERS"
  | "SET_POSTS"
  | "SET_COMMENTS"
  | "ADD_NEW_COMMENT";

const UserPageReducer = (
  state = initialState,
  action: { type: ActionTypes } & UserPageState &
    PostDataState &
    CommentSectionState &
    Comment
) => {
  switch (action.type) {
    case "SET_USERS": {
      return { ...state, userData: [...action.userData] };
    }
    case "SET_POSTS": {
      return { ...state, postData: [...action.postData] };
    }
    case "SET_COMMENTS": {
      return { ...state, commentData: [...action.commentData] };
    }
    case "ADD_NEW_COMMENT": {
      let NewComment = {
        postId: action.postId,
        senderName: action.senderName,
        commentText: action.commentText,
      };
      return { ...state, commentData: [...state.commentData, NewComment] };
    }
  }
  return state;
};

export const setUsersActionCreator = (userData: User[]) => {
  return {
    type: "SET_USERS",
    userData: userData,
  };
};

export const setPostsActionCreator = (postData: Post[]) => {
  return {
    type: "SET_POSTS",
    postData: postData,
  };
};

export const setCommentsActionCreator = (commentData: Comment[]) => {
  return {
    type: "SET_COMMENTS",
    commentData: commentData,
  };
};

export const addNewCommentActionCreator = (comment: Comment) => {
  return {
    type: "ADD_NEW_COMMENT",
    postId: comment.postId,
    senderName: comment.senderName,
    commentText: comment.commentText,
  };
};

export default UserPageReducer;
