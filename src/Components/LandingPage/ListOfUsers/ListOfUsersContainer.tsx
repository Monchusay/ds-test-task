import { connect } from "react-redux";
import ListOfUsers from "./ListOfUsers";
import {Dispatch} from "redux";
import {State} from "../../../Store/Redux-store";
import {setUsersActionCreator, User} from "../../../Store/UserPageReducer";

export interface ListOfUsersDispatch {
    setUsers:(userData:User[])=> void;
}

let mapStateToProps = (state:State) => {
    return {
        userData: state.UserPage.userData,
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        setUsers: (userData:User[]) => {
            dispatch(setUsersActionCreator(userData))
        },
    };
};

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps) (ListOfUsers)

export default ListOfUsersContainer