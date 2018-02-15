import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";
import SignupScreen from "../screens/SignupScreen";

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUp:{
    screen: SignupScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedOutNavigation;
