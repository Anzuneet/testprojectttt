import React, { Component } from "react";
import { Alert} from 'react-native';
import SignupScreen from "./presenter";


class Container extends Component {

  state={
    username: "",
    password: "",
    password2: "",
    phonenumber : "",
    type : "",  //trainee or trainer.
    fitness_club_name : "", //integer,
    gender : "", // M or F only,
    birthday : "", //date
    isSubmitting: false
  }
 
  render() {
    return <SignupScreen {...this.state} 
            changeUsername = {this._changeUsername}
            changePassword = {this._changePassword}
            changePassword2 = {this._changePassword2}
            changePhonenumber = {this._changePhonenumber}
            changeType = {this._changeType}
            changeFitness_club_name = {this._changeFitness_club_name}
            changeGender = {this._changeGender}
            changeBirthday = {this._changeBirthday}
            isSearching = {this._isSearching}
            submit = {this._submit}
    />;
  }
  _changeUsername = (text) =>{
    this.setState({username: text});
  };

  _changePassword = (text) => {
    this.setState({password:text});
  };

  _changePassword2 = (text) => {
    this.setState({password2:text});
  };

  _changePhonenumber = (text) => {
    this.setState({phonenumber:text});
  };

  _changeType = (text) => {
    this.setState({type:text});
  };

  _changeFitness_club_name = (text) => {
    this.setState({fitness_club_name:text});
  };
  _changeGender= (text) => {
    this.setState({gendr:text});
  };
  _changeBirthday = (text) => {
    this.setState({birthday:text});
  };
  
  _isSearching = () =>{

  }
  
  _submit = () =>{
    const { username, 
            password,
            phonenumber,
            type,
            fitness_club_name,
            gender,
            birthday,
            isSubmitting } = this.state;
    if(!isSubmitting){
      if(username  && password && phonenumber 
         && type && fitness_club_name && gender
         && birthday)
         {
            this.setState({
            isSubmitting : true
        })
        //submit
      }else{
        Alert.alert('All fields are required!');
      }
    }
  }
}

export default Container;