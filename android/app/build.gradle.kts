plugins {
  id("com.android.application")
  id("org.jetbrains.kotlin.android")
  id("com.facebook.react")
}

project.ext {
  extra.set(
    "vectoricons",
    mapOf("iconFontNames" to listOf("MaterialIcons.ttf", "MaterialCommunityIcons.ttf"))
  )
}

apply(file("../../node_modules/react-native-vector-icons/fonts.gradle"))

/**
 * This is the configuration block to customize your React Native Android app.
 * By default you don't need to apply any configuration, just uncomment the lines you need.
 */
react {
  /* Folders */
  //   The root of your project, i.e. where "package.json" lives. Default is '../..'
  // root = file("../../")
  //   The folder where the react-native NPM package is. Default is ../../node_modules/react-native
  // reactNativeDir = file("../../node_modules/react-native")
  //   The folder where the react-native Codegen package is. Default is ../../node_modules/@react-native/codegen
  // codegenDir = file("../../node_modules/@react-native/codegen")
  //   The cli.js file which is the React Native CLI entrypoint. Default is ../../node_modules/react-native/cli.js
  // cliFile = file("../../node_modules/react-native/cli.js")

  /* Variants */
  //   The list of variants to that are debuggable. For those we're going to
  //   skip the bundling of the JS bundle and the assets. By default is just 'debug'.
  //   If you add flavors like lite, prod, etc. you'll have to list your debuggableVariants.
  // debuggableVariants = ["liteDebug", "prodDebug"]

  /* Bundling */
  //   A list containing the node command and its flags. Default is just 'node'.
  // nodeExecutableAndArgs = ["node"]
  //
  //   The command to run when bundling. By default is 'bundle'
  // bundleCommand = "ram-bundle"
  //
  //   The path to the CLI configuration file. Default is empty.
  // bundleConfig = file(../rn-cli.config.js)
  //
  //   The name of the generated asset file containing your JS bundle
  // bundleAssetName = "MyApplication.android.bundle"
  //
  //   The entry file for bundle generation. Default is 'index.android.js' or 'index.js'
  // entryFile = file("../js/MyApplication.android.js")
  //
  //   A list of extra flags to pass to the 'bundle' commands.
  //   See https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle
  // extraPackagerArgs = []

  /* Hermes Commands */
  //   The hermes compiler command to run. By default it is 'hermesc'
  // hermesCommand = "$rootDir/my-custom-hermesc/bin/hermesc"
  //
  //   The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"
  // hermesFlags = ["-O", "-output-source-map"]

  /* Autolinking */
  autolinkLibrariesWithApp()
}

/**
 * Set this to true to Run Proguard on Release builds to minify the Java bytecode.
 */
val enableProguardInReleaseBuilds = false

android {
  ndkVersion = libs.versions.ndkVersion.get()
  buildToolsVersion = libs.versions.buildToolsVersion.get()
  compileSdk = libs.versions.compileSdkVersion.get().toInt()

  namespace = "com.reactnativeexample"
  defaultConfig {
    applicationId = "com.reactnativeexample"
    minSdk = libs.versions.minSdkVersion.get().toInt()
    targetSdk = libs.versions.targetSdkVersion.get().toInt()
    versionCode = 1
    versionName = "1.0"
  }
  signingConfigs {
    getByName("debug") {
      storeFile = file("debug.keystore")
      storePassword = "android"
      keyAlias = "androiddebugkey"
      keyPassword = "android"
    }
  }
  buildTypes {
    debug {
      signingConfig = signingConfigs.getByName("debug")
    }
    release {
      // Caution! In production, you need to generate your own keystore file.
      // see https://reactnative.dev/docs/signed-apk-android.
      signingConfig = signingConfigs.getByName("debug")
      isMinifyEnabled = enableProguardInReleaseBuilds
      proguardFiles(getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro")
    }
  }
}

dependencies {
  // The version of react-native is set by the React Native Gradle Plugin
  implementation(libs.react.android)

  if (rootProject.property("hermesEnabled") == "true") {
    implementation(libs.hermes.android)
  } else {
    /**
     * The preferred build flavor of JavaScriptCore (JSC)
     *
     * For example, to use the international variant, you can use:
     * `def jscFlavor = 'org.webkit:android-jsc-intl:+'`
     *
     * The international variant includes ICU i18n library and necessary data
     * allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
     * give correct results when using with locales other than en-US. Note that
     * this variant is about 6MiB larger per architecture than default.
     */
    implementation(libs.android.jsc)
  }
}
