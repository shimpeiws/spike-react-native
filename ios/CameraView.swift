//
//  CameraView.swift
//  spikereactnative
//
//  Created by Shimpei Takamatsu on 2018/08/08.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation

import UIKit
import AVFoundation

class CameraView: UIView {
  var session: AVCaptureSession?
  var photoOutput: AVCapturePhotoOutput?
  var camera: AVCaptureDevice?
  var videoLayer: AVCaptureVideoPreviewLayer?
  
  override init(frame: CGRect) {
    super.init(frame: frame)

    session = AVCaptureSession()
    session!.sessionPreset = AVCaptureSessionPreset1920x1080
    
    let device = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo)
    
    do {
      let videoInput = try AVCaptureDeviceInput.init(device: device)
      if (session!.canAddInput(videoInput)) {
        photoOutput = AVCapturePhotoOutput()
        session!.addOutput(photoOutput)
        
        videoLayer = AVCaptureVideoPreviewLayer.init(session: session)
        videoLayer?.frame = self.bounds
        videoLayer?.videoGravity = AVLayerVideoGravityResizeAspectFill
        
        self.layer.addSublayer(videoLayer!)
      } else {
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 100,
                                          height: 50))
        label.text = "This is Swift"
        self.addSubview(label)
      }
    }
    catch {
      print(error)
      let label = UILabel(frame: CGRect(x: 0, y: 0, width: 300,
                                        height: 50))
      label.text = "This is \(error)"
      self.addSubview(label)
    }
  }
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  func setupCamera() {
    guard let camera = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo) else {
      Swift.print("failed to get a camera device")
      return
    }
    self.camera = camera
  }
}
