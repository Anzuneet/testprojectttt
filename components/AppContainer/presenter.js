import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";
import TrainingManagementScreen from "../../screens/TrainingManagementScreen";



class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
    isTrainer:PropTypes.bool.isRequired,
  };

  componentDidMount() {
      const { isLoggedIn, initApp, isTrainer } = this.props;
      if (isLoggedIn) {
        initApp();
      }
  }
  render() {
    const { isLoggedIn, profile, isTrainer } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoggedIn ? 
        <RootNavigation/> :
          <LoggedOutNavigation />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topText : {
    height : 40,
    backgroundColor :'orange',
    alignItems : 'center',
    justifyContent : 'center'

  },
});


export default AppContainer;
