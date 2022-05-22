import {State} from "../../Store/Redux-store";
import {Dispatch} from "redux";
import {Post, setPostsActionCreator} from "../../Store/UserPageReducer";
import {connect} from "react-redux";
import PostList from "./PostList";

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

const PostListContainer = connect(mapStateToProps,mapDispatchToProps)(PostList)

export default PostListContainer
