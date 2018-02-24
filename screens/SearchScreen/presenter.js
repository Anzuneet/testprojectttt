import React from "react";
import PropTypes from 'prop-types';
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
import { Ionicons,Feather } from "@expo/vector-icons";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const { width, height } = Dimensions.get("window");

const SearchScreens = props => (
    <View style = {styles.container}>
        <View style = {styles.mapContainer}>
            <Text> 여기다 지도 띄워 </Text>
        </View>
        <TouchableOpacity style = {styles.filterContainer} onPressOut = {props.searchFilter}>
            <Text style = {styles.filterText}> 
                나에게 맞는 트레이너 찾기! 
            </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "white",
    },
    mapContainer:{
        flex:10,
        backgroundColor : "#ebebeb",
    },
    filterContainer: {
        flex : 1,
        backgroundColor : "#fefefe",
        justifyContent: "center",
        alignItems: "center",

    },
    filterText : {
        fontSize : 30,
        color : "rgba(0,0,0,0.5)"
        },
})

export default SearchScreens;