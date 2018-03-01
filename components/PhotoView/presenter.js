import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter
}from "victory-native";

const { width, height } = Dimensions.get("window");



 const PhotoView = props => (
  <View>
    <View style = {styles.dateContainer}>
      <Text style = {styles.dateText}> {prop.date} </Text>
    </View>
    <View style = {styles.imageContainer}>
      <Image
        source={require("../../assets/images/logo-white.png")}
        resizeMode="stretch"
        style={styles.logo}/>
    </View>
    <View style = {styles.dataContainer}>
    </View>
    <View style = {styles.commentContainer}>
    </View>
    
  </View>
  

);

const styles = StyleSheet.create({
  chartTitleContainer :{
    paddingTop :10,
    alignItems: 'center',
  },
  chartContainer : {
    backgroundColor: '#eeeeee',
    marginVertical : 6,
    marginHorizontal : 10,
  },
  title :{
    fontSize : 20,
  },
});

export default PhotoView;