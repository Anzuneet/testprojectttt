import React from "react";
import { Image } from "react-native";
import { StackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
import NavButton from "../components/NavButton";

const HomeRoute = StackNavigator(
  {
    Home: {
      screen: FeedScreen,
    
    },
    ...sharedRoutes
  },
 {
   ...sharedOptions
 }
);
 
 export default HomeRoute;