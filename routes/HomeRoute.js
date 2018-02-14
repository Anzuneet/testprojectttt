import {StackNavigator} from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes , {sharedOptions} from "./sharedRoutes";


const HomeRoute = StackNavigator(
    {
        Home:{
            screen: FeedScreen,
            navigationOptions : {
                headerStyle: {
                    backgroundColor : "pink",
                    height : 30
                }
            }
        },
        ...sharedRoutes
    },
    {
        ...sharedOptions
    },
)

export default HomeRoute;