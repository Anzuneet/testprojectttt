import { StackNavigator } from "react-navigation";
import SignupScreen from "../screens/SignupScreen";
import NavButton from "../components/NavButton";


const SignupNavigation = StackNavigator(
{
  signUp: {
    screen: SignupScreen,
    navigationOptions: {
      header: null
    }
  }
}
);

export default SignupNavigation;
