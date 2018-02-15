import {StackNavigator} from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import NavButton from "../components/NavButton";


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
            title: "showProfile",
            //headerLeft : props => <NavButton iconName = {"ios-arrow-back"} {...props}  />,
        }
    }
 },
 {
     mode:"modal",
     
 } 
);

export default RootNavigation;