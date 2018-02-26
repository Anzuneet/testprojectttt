import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchScreen from "./presenter";
import {Constants, Location, MapView} from 'expo';

class Container extends Component {
  map = null;
  state = {
    mapRegion:'unknown',       
    markers:{
        latitude: 37.2926241,
        longitude: 126.8544851,
    }
  };

  componentDidMount(){
    this._getLocationAsync();
  };

  _getLocationAsync = async () => {
    const location = await Location.getCurrentPositionAsync({});

    console.log(location);
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },()=>{
      
    });    
  };

  _onPress(data){
    let latitude=data.nativeEvent.coordinate.latitude;
    let longitude=data.nativeEvent.coordinate.longitude;
    arrayMarkers.push({
        latitude:latitude,
        longitude:longitude,
    });

    this.setState({markers:arrayMarkers})
}
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  /*renderMarkers(){
   this.markers=[];
   for (marker of this.markers){
       markers.push(
           <MapView.Marker key={marker.longitude} title={'우리동네 헬스장'+ marker.latitude}
                       description={'하하'}
                       coordinate={marker}
           />
       )
   }
   return this.markers;
  }*/


  render() {
    return <SearchScreen
        {...this.state}
        handleMapRegionChange = {this._handleMapRegionChange}
        searchFilter = {this._searchFilter}
        //renderMarkers = {this.renderMarkers}
    />;
  }

  _searchFilter = () =>{
    const {navigate} = this.props.navigation;
      navigate("searchFilter");
  }

  
}

export default Container;