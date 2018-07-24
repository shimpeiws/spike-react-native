import React from "react";
import axios from "axios";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "aaaaaaa"
    };
  }
  async componentDidMount() {
    console.info("componentDidMount");
    const result = await axios.get("http://httpbin.org/");
    console.info("result", result);
  }
  render() {
    const { hasCameraPermission } = this.state;
    const pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        {/* <Camera style={{ flex: 1 }} type={this.state.type}> */}
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={() => {
              Alert.alert("Touched");
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
        {/* </Camera> */}
        {/* <ScrollView> */}
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
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
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

AppRegistry.registerComponent("spike-react-native", () => App);
