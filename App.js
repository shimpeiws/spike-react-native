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
  TouchableOpacity,
  NativeModules,
  NativeEventEmitter
} from "react-native";

import SampleView from "./SampleView.ios.js";

const { CalendarManager } = NativeModules;
console.log("Calendar Manager", NativeModules.CalendarManager);
const calendarManagerEmitter = new NativeEventEmitter(CalendarManager);
const subscription = calendarManagerEmitter.addListener(
  "EventReminder",
  reminder => {
    console.log("EVENT");
    console.log("name: " + reminder.name);
    console.log("location: " + reminder.location);
    console.log("date: " + reminder.date);
  }
);
NativeModules.CalendarManager.addEvent("One", "Two", 3, function(o) {
  console.log("In Callback", o);
});

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
        <SampleView />
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
    );
    // </ScrollView>
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
