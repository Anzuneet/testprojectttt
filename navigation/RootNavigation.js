import {StackNavigator} from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigation = StackNavigator(
 {
    Tabs:{
        screen: TabsNavigation,
        navigationOptions: {
            header: null
        }
    },
    TakePhoto:{
        screen: TakePhotoScreen,
        navigationOpions:{
            title: "showProfile"
        }
    }
 },
 {
     mode:"modal"
 } 
);

export default RootNavigation;