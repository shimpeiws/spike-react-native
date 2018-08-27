import React from "react";
import { AppRegistry, Text, View } from "react-native";
import CameraView from "../CameraView.ios.js";

export default class SecondTabScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>SecondTabScreen</Text>
        <CameraView />
      </View>
    );
  }
}

AppRegistry.registerComponent("spike-react-native", () => SecondTabScreen);
