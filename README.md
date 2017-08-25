# Ionic2 iOS Background Fetch sample project

Sample project using [cordova background fetch plugin](https://github.com/transistorsoft/cordova-plugin-background-fetch)

The project also uses [cordova native storage plugin](https://github.com/TheCocoaProject/cordova-plugin-nativestorage#errors)

This project uses background fetch to store a timestamp in iOS UserDefaults using the native storage plugin. The app will wake up in background and save the timestamp. The list of timestamps are shown in a list.

## Installation

Download source code and use local npm packages

```
npm install
```

For iOS

```
ionic cordova platform add ios
ionic cordova run ios
```

This project won't work on an Android device because the background fetch plugin is iOS native

## Platforms

- iOS

## Testing on device

There are 2 ways of testing background fetch on a real device:

* Leave the app in the background and wait until it wakes up and executes its code. (This may take a long time)
* Executing via Xcode and simulate a background fetch.

#### Simulate Background Fetch

* Start the app on an actual device via Xcode.
* While the app is running go to __Debug__ menu and select __Simulate Background Fetch__
* The app will go to background mode and Xcode's debugger will stop. Click the debugger's continue button.
* Open the app again.
* The background fetch should have already been performed.
