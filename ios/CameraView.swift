//
//  CameraView.swift
//  spikereactnative
//
//  Created by Shimpei Takamatsu on 2018/08/08.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation

import UIKit
class CameraView: UIView {
  override init(frame: CGRect) {
    super.init(frame: frame)
    let label = UILabel(frame: CGRect(x: 0, y: 0, width: 100,
                                      height: 50))
    label.text = "Camera View"
    self.addSubview(label)
  }
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}
