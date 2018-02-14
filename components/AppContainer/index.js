import { connect }from "react-redux";
import AppContainer from "./presenter";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    return {
        isLoggedIn: user.isLoggedIn
    };
}

export default connect(mapStateProps)(AppContainer);