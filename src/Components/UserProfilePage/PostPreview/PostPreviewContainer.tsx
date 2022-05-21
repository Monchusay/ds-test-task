import {State} from "../../../Store/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import PostPreview from "./PostPreview";
import {Post, setPostsActionCreator, User} from "../../../Store/UserPageReducer";

export interface PreviewPostsDispatch {
    setPosts:(postData:Post[])=> void;
}

let mapStateToProps = (state:State) => {
    return {
        postData: state.UserPage.postData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        setPosts: (postData:Post[]) => {
            dispatch(setPostsActionCreator(postData))
        },
    };
};

const PostPreviewContainer = connect (mapStateToProps,mapDispatchToProps) (PostPreview)

export default PostPreviewContainer