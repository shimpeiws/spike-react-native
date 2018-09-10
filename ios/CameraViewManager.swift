//
//  CameraViewManager.swift
//  spikereactnative
//
//  Created by Shimpei Takamatsu on 2018/08/08.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation

@objc(CameraViewManager)
class CameraViewManager : RCTViewManager {
  override func view() -> UIView! {
    return CameraView();
  }
}
