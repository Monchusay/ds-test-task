import {State} from "../../../Store/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import PostPreview from "./PostPreview";

let mapStateToProps = (state:State) => {
    return {
        postData: state.UserPage.postData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {

    };
};

const PostPreviewContainer = connect (mapStateToProps,mapDispatchToProps) (PostPreview)

export default PostPreviewContainer