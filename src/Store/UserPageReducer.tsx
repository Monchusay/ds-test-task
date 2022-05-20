let initialState: UserPageState = {
  userData: [
  ],
};

export interface User {
  name: string;
  surname: string;
  location: string;
  id: number;
}

export interface UserPageState {
  userData: User[];
}

type ActionTypes = "SET_USERS";

const UserPageReducer = (
  state = initialState,
  action: { type: ActionTypes } & UserPageState
) => {
  switch (action.type) {
    case "SET_USERS": {
      return {...state, userData: [...action.userData]};
    }
  }
  return state;
};

export const setUsersActionCreator = (userData:User[]) => {
  return {
    type: "SET_USERS",
    userData: userData,
  };
};

export default UserPageReducer;
