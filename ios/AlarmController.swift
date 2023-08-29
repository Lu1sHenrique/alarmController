@objc(AlarmController)
class AlarmController: NSObject {

  @objc(teste:withRejecter:)
  func teste(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve("camera aberta");
  }
}
