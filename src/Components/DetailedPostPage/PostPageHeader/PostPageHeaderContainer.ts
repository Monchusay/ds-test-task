import {State} from "../../../Store/Redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import PostPageHeader from "./PostPageHeader";

let mapStateToProps = (state:State) => {
    return {
        postData: state.UserPage.postData
    };
};

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {

    };
};

const PostPageHeaderContainer = connect (mapStateToProps,mapDispatchToProps)(PostPageHeader)

export default PostPageHeaderContainer