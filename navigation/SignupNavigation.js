import { StackNavigator } from "react-navigation";
import SignupScreen from "../screens/SignupScreen";

const SignupNavigation = StackNavigator({
  LogIn: {
    screen: SignupScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default SignupNavigation;
