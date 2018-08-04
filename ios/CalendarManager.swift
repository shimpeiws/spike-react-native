//
//  CalendarManager.swift
//  spikereactnative
//
//  Created by Shimpei Takamatsu on 2018/07/26.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation

// CalendarManager.swift

@objc(CalendarManager)
class CalendarManager: RCTEventEmitter {
  
  @objc override func supportedEvents() -> [String]! {
    return ["EventReminder"];
  }
  
  @objc func addEvent(_ name: String, location: String, date: NSNumber, callback: RCTResponseSenderBlock ) -> Void {
    // Date is ready to use!
    NSLog("%@ %@ %@", name, location, date)
    let ret:[String:Any] =  ["name": name, "location": location, "date" : date]
    callback([ret])
    self.sendEvent(withName: "EventReminder", body: ret)
  }
  
  @objc override func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "x": 1,
      "y": 2,
      "z": "Arbitrary string"
    ]
  }
  
}
