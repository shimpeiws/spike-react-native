//
//  SampleViewManager.swift
//  spikereactnative
//
//  Created by Shimpei Takamatsu on 2018/07/26.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation

@objc(SampleViewManager)
class SampleViewManager : RCTViewManager {
  override func view() -> UIView! {
    return SampleView();
  }
}
