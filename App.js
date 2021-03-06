
import React from 'react';
import { AppLoading, Asset, Font} from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { StyleSheet,
         Text,
         View,
         BackHandler,
 } from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";
import SignupNavigation from './navigation/SignupNavigation';

const {persistor, store} = configureStore();



class App extends React.Component 
{


  state ={
    isLoadingComplete : false
  }
  render() {
    store.dispatch({type: "LOG_OUT"});
    const {isLoadingComplete} =this.state;
    if(!isLoadingComplete){
      return(
        <AppLoading 
          startAsync={this._loadAssetAsync}
          onError = {this._handleLoadingError}
          onFinish ={this._hnadleFinishLoading}
        />
      )}
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
 
  _loadAssetAsync = async() =>{
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo.png"),
        require("./assets/images/logo-white.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };

  _handleLoadingError = error => {
    consol.error(error);
  };

  _hnadleFinishLoading = async () =>{
    this.setState({
      isLoadingComplete:true
    });
  };
}


export default App;


