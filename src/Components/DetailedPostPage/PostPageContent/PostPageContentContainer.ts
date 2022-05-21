import {State} from "../../../Store/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import PostPageContent from "./PostPageContent";

let mapStateToProps = (state:State) => {
    return {
        postData: state.UserPage.postData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {

    };
};

const PostPageContentContainer = connect(mapStateToProps,mapDispatchToProps)(PostPageContent)

export default PostPageContentContainer