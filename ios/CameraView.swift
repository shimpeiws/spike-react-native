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
  override init(frame: CGRect) {
    super.init(frame: frame)

    let captureSesssion = AVCaptureSession()
    let stillImageOutput = AVCapturePhotoOutput()
    
    captureSesssion.sessionPreset = AVCaptureSessionPreset1920x1080 // 解像度の設定
    
    let device = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo)
    
    
    do {
      let input = try AVCaptureDeviceInput(device: device)
      
      // 入力
      if (captureSesssion.canAddInput(input)) {
        captureSesssion.addInput(input)
        
        // 出力
        if (captureSesssion.canAddOutput(stillImageOutput)) {
          captureSesssion.addOutput(stillImageOutput)
          captureSesssion.startRunning() // カメラ起動
          
          let previewLayer = AVCaptureVideoPreviewLayer(session: captureSesssion)
          previewLayer?.videoGravity = AVLayerVideoGravityResizeAspect // アスペクトフィット
          previewLayer?.connection.videoOrientation = AVCaptureVideoOrientation.portrait // カメラの向き
          
          self.layer.addSublayer(previewLayer!)
          
          // ビューのサイズの調整
          previewLayer?.position = CGPoint(x: self.frame.width / 2, y: self.frame.height / 2)
          previewLayer?.bounds = self.frame
        }
      } else {
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 100,
                                          height: 50))
        label.text = "Camera View"
        self.addSubview(label)
      }
    }
    catch {
      print(error)
    }
  }
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}
