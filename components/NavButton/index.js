

import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavButton = props => (
  <TouchableWithoutFeedback onPressOut={props.onPress}>
    <View style={styles.container}>
      <Ionicons name={props.iconName} color={"white"} size={props.size} />
    </View>
  </TouchableWithoutFeedback>
);

NavButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingLeft : 20,
    alignItems: 'center',
    marginBottom : 15,
  }
});

export default NavButton;