import React from "react";
import { AppRegistry, Text, View } from "react-native";

export default class SecondTabScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>SecondTabScreen</Text>;
      </View>
    );
  }
}

AppRegistry.registerComponent("spike-react-native", () => SecondTabScreen);
