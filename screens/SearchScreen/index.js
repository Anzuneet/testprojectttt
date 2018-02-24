import React, { Component } from "react";
import {View, Text, StyleSheet }from "react-native";
import { Constants, MapView, Location } from 'expo';

export default class ReactMap extends Component {

    state = {
        mapRegion:{
            latitude: 37.2926241,
            longitude: 145.8544851,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },       

        markers:{
            latitude: 37.2926241,
            longitude: 126.8544851,
        }
      };

    
      // 현재 자신의 위치를 가져와서 State상태를 변경한다.
      componentDidMount(){
        this._getLocationAsync();
    }

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
        });
      };

    _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };


    // 마커 관련 코드
    _onPress(data){
        let latitude=data.nativeEvent.coordinate.latitude;
        let longitude=data.nativeEvent.coordinate.longitude;
        arrayMarkers.push({
            latitude:latitude,
            longitude:longitude,
        });

        this.setState({markers:arrayMarkers})
    }

    renderMarkers(){
        this.state.markers=[];
       for (marker of this.state.markers){
           markers.push(
               <MapView.Marker key={marker.longitude} title={'우리동네 헬스장'+ marker.latitude}
                           description={'하하'}
                           coordinate={marker}
               />
           )
       }
       return this.state.markers;
   }
  
    render() {
      return (
        <View style={styles.container}>
          <MapView
            style={{ alignSelf: 'stretch', height: 500 }}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
          >
           <MapView.Marker 
            title={'우리동네 헬스장'}              
            description={'하하'}              
            coordinate={this.state.markers}/>
            {this.renderMarkers()}
        </MapView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
  });