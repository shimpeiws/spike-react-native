import React from "react";
import { AppRegistry, Text, View } from "react-native";

export default class FirstTabScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>FirstTabScreen</Text>;
      </View>
    );
  }
}

AppRegistry.registerComponent("spike-react-native", () => FirstTabScreen);
