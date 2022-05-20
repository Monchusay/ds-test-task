import {State} from "../../../Store/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";

let mapStateToProps = (state:State) => {
    return {
        userData: state.UserPage.userData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {

    };
};

const ProfileCardContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileCard)

export default ProfileCardContainer
