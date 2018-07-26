import React from "react";
import { requireNativeComponent, Component } from "react-native";

const SampleViewNative = requireNativeComponent("SampleView", SampleView);

class SampleView extends React.Component {
  render() {
    return <SampleViewNative style={{ margin: 100 }} />;
  }
}

module.exports = SampleView;
