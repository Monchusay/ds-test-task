let initialState: UserPageState & PostDataState = {
  userData: [],
  postData: []
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
  senderProfileName:string;
  postHeader:string;
  postPreview:string;
  postPublishDate:string;
  id:number;
}

export interface UserPageState {
  userData: User[];
}
export interface PostDataState {
  postData: Post[];
}

type ActionTypes = "SET_USERS" | "SET_PREVIEW_POSTS"

const UserPageReducer = (
  state = initialState,
  action: { type: ActionTypes } & UserPageState & PostDataState
) => {
  switch (action.type) {
    case "SET_USERS": {
      return { ...state, userData: [...action.userData] };
    }
    case "SET_PREVIEW_POSTS": {
      return {...state, postData: [...action.postData] };
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
    type: "SET_PREVIEW_POSTS",
    postData: postData,
  };
};

export default UserPageReducer;
