import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: "One",
      screen: "example.FirstTabScreen", // this is a registered name for a screen
      icon: require("./icons/alarm.png"),
      selectedIcon: require("./icons/alarm.png"), // iOS only
      title: "Screen One"
    },
    {
      label: "Two",
      screen: "example.SecondTabScreen",
      icon: require("./icons/alarm.png"),
      selectedIcon: require("./icons/alarm.png"), // iOS only
      title: "Screen Two"
    }
  ]
});
