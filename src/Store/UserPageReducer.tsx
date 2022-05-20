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
  postHeader:string;
  postPreview:string;
  postPublishDate:string;
}

export interface UserPageState {
  userData: User[];
}
export interface PostDataState {
  postData: Post[];
}

type ActionTypes = "SET_USERS";

const UserPageReducer = (
  state = initialState,
  action: { type: ActionTypes } & UserPageState
) => {
  switch (action.type) {
    case "SET_USERS": {
      return { ...state, userData: [...action.userData] };
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

export default UserPageReducer;
