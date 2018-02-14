import React from "react";
import {TabNavigator} from "react-navigation";
import {Ionicons} from "@expo/vector-icons";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";


const TabsNavigation = TabNavigator(
{
    Home: {
        screen: HomeRoute,
        navigationOptions: {
          tabBarIcon: () => (
            <Ionicons
              name = {"ios-home" }
              size={30}
              color={"black"}
            />
          )
        }
      },
      Search: {
        screen: SearchRoute,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-search" : "ios-search-outline"}
              size={30}
              color={"black"}
            />
          )
        }
      },
      Notifications: {
        screen: NotificationsRoute,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-heart" : "ios-heart-outline"}
              size={20}
              color={"red"}
            />
          )
        }
      },
      Profile: {
        screen: ProfileRoute,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-person" : "ios-person-outline"}
              size={30}
              color={"black"}
            />
          )
        }
      }
    },
    {
      tabBarPosition: "Top",
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
          backgroundColor: "#FBFBFB",
          height: 45
        }
      }
     }
);
  

    
export default TabsNavigation;