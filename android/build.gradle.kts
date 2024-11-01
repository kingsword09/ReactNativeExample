plugins {
    id("com.facebook.react.rootproject")
}

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
