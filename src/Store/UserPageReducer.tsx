let initialState: UserPageState & PostDataState & CommentSectionState = {
  userData: [],
  postData: [],
  commentData: []
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
  senderProfileName:string;
  postHeader:string;
  postPreview:string;
  postPublishDate:string;
  id:number;
}

export interface Comment {
  postId: number;
  senderName:string;
  commentText:string;
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

type ActionTypes = "SET_USERS" | "SET_POSTS" | "SET_COMMENTS"

const UserPageReducer = (
  state = initialState,
  action: { type: ActionTypes } & UserPageState & PostDataState & CommentSectionState
) => {
  switch (action.type) {
    case "SET_USERS": {
      return { ...state, userData: [...action.userData] };
    }
    case "SET_POSTS": {
      return {...state, postData: [...action.postData] };
    }
    case "SET_COMMENTS" : {
      return {...state, commentData: [...action.commentData]}
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

export default UserPageReducer;
