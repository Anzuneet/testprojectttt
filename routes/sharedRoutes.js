import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";

const sharedRoutes = {
    Likes:{
        screen:LikesScreen
    },
    Comments:{
        screen:CommentsScreen
    }
};

const sharedOptions = { // 공유옵션이므로 전체에 줌
    navigationOptions:{
        headerStyle:{
            backgroundColor: "#fbfbfb"
        }
    }
};

export {sharedOptions};

export default sharedRoutes;