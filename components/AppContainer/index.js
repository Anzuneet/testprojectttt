import { connect }from "react-redux";
import AppContainer from "./presenter";
import {actionCreators as photoActions } from "../../redux/modules/photos"

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    return {
        isLoggedIn: user.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            //dispatch(photoActions.getFeed());
            //getSearch
            //getNotifications
            //getProfile
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(AppContainer);
