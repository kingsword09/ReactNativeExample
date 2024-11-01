//
//  AppDelegate.swift
//  KotlinDslExample
//
//  Created by kingsword09 on 2024/10/31.
//

// @see https://stackoverflow.com/questions/74738520/change-appdelegate-mm-to-appdelegate-swift-on-react-native-0-71
import Foundation

@UIApplicationMain
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
    self.moduleName = "KotlinDslExample"
    self.initialProps = [:]
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func bundleURL() -> URL? {
    #if DEBUG
      return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackExtension: nil)
    #else
      return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
}
