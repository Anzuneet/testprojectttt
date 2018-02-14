import React, { Component } from "react";
import { Alert, StyleSheet} from 'react-native';
import LogInScreen from "./presenter";
import SignupNavigation from "../../navigation/SignupNavigation";


class Container extends Component {

  state={
    username: "",
    password: "",
    isSubmitting: false,
    toSignUp: false
  }
 
  render() {
    const {toSignUp} = this.state;
    if(toSignUp){
      
      return <SignupNavigation/>;
    }else{
      return (
        <LogInScreen {...this.state} 
        changeUsername = {this._changeUsername}
        changePassword = {this._changePassword}
        submit = {this._submit}
        signup = {this._signup}
        />
      );
    }
  }
  _changeUsername = (text) =>{
    this.setState({username: text});
  };

  _changePassword = (text) => {
    this.setState({password:text});
  };

  _submit = async () =>{
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if(!isSubmitting){
      if(username  && password){
        this.setState({
          isSubmitting : true
        })
        const loginResult = await login(username, password);
        /*if(!loginResult){
          Alert.alert("Somethin went wrong!,아디혹은비번 틀림");
          this.setState({isSubmitting : false});
        }*/
        //submit
      }else{
        Alert.alert('All fields are required!');
      }
    }
  }
  
  _signup = () =>{
    console.log("Hello I am in _signup!!");
    this.setState({toSignUp:true});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Container;