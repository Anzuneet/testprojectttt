import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchScreen from "./presenter";

class Container extends Component {

  state = {
    
  }

  render() {
    
    return <SearchScreen
        searchFilter = {this._searchFilter}
    />;
  }

  _searchFilter = () =>{
    const {navigate} = this.props.navigation;
      navigate("searchFilter");
  }

  
}

export default Container;