import React from "react";
import { requireNativeComponent, Component } from "react-native";

const CameraViewNative = requireNativeComponent("CameraView", CameraView);

class CameraView extends React.Component {
  render() {
    return <CameraViewNative style={{ margin: 100 }} />;
  }
}

module.exports = CameraView;
