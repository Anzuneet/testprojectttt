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
import {MapView} from 'expo';

const { width, height } = Dimensions.get("window");

const SearchScreens = props => (
    <View style = {styles.container}>
        <View style = {styles.mapContainer}>
        <MapView
            style={{ alignSelf: 'stretch', height: 500 }}
            region={props.mapRegion}
            onRegionChange={props.handleMapRegionChange}
          >
           <MapView.Marker 
            title={'우리동네 헬스장'}              
            description={'하하'}              
            coordinate={props.markers}/>
        </MapView>
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