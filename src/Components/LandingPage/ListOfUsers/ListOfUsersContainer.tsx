import { connect } from "react-redux";
import ListOfUsers from "./ListOfUsers";
import {Dispatch} from "redux";
import {State} from "../../../Store/Redux-store";

let mapStateToProps = (state:State) => {
    return {
        userData: state.UserPage.userData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {

    };
};

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps) (ListOfUsers)

export default ListOfUsersContainer