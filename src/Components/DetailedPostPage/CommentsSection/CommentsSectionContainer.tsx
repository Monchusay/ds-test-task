import {addNewCommentActionCreator, Comment, setCommentsActionCreator} from "../../../Store/UserPageReducer";
import {State} from "../../../Store/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import CommentsSection from "./CommentsSection";

export interface CommentsSectionDispatch {
    setComments:(commentData:Comment[])=> void;
    addNewComment:(comment:Comment)=> void;
}

let mapStateToProps = (state:State) => {
    return {
        commentData: state.UserPage.commentData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        setComments: (commentData:Comment[]) => {
            dispatch(setCommentsActionCreator(commentData))
        },
        addNewComment: (comment:Comment) => {
            dispatch(addNewCommentActionCreator(comment))
        }
    };
}

const CommentsSectionContainer = connect (mapStateToProps,mapDispatchToProps)(CommentsSection)

export default CommentsSectionContainer