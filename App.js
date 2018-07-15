import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "aaaaaaa" };
  }
  render() {
    const pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here !!!"
          onChangeText={text => this.setState({ text })}
        />
        <Text>{this.state.text}</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Button
          onPress={() => {
            Alert.alert("Button Pressed");
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("spike-react-native", () => App);
