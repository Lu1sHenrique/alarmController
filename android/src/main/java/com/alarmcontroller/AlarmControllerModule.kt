package com.alarmcontroller

import android.content.Intent
import android.provider.MediaStore
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class AlarmControllerModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun setAlarm(promise: Promise) {

    promise.resolve("alarme setado com sucesso!");
  }

  companion object {
    const val NAME = "AlarmController"
  }
}
