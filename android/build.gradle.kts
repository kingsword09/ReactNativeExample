plugins {
    id("com.facebook.react.rootproject")
}

extra["buildToolsVersion"] = libs.versions.buildToolsVersion.get()
extra["minSdkVersion"] = libs.versions.minSdkVersion.get().toInt()
extra["compileSdkVersion"] = libs.versions.compileSdkVersion.get().toInt()
extra["targetSdkVersion"] = libs.versions.targetSdkVersion.get().toInt()
extra["ndkVersion"] = libs.versions.ndkVersion.get()

buildscript {
    repositories {
        google()
        mavenCentral()
    }

    dependencies {
        classpath(libs.react.native.gradle.plugin)
    }
}

repositories {
    google()
    mavenCentral()
}
