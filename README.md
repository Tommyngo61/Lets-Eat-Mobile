# Lets-Eat-Mobile

Mobile version of the Let's Eat App

# Table of Contents

1. [Getting Started](#Getting-Started)
2. [Dependencies](#Depedencies)
3. [Running Expo On IOS](#Running-Expo-On-IOS)
4. [Running Expo On Android](#Running-Expo-On-Android)
5. [Debugging](#Debugging)

## Getting Started

## Dependencies

- Node js
- React native
- Expo

(You may have to type <code>npm install</code> and/or <code>npm install -g expo-cli</code> see [React Native](https://reactnative.dev/docs/environment-setup) for more information).

<p>To run this project in terminal while in the project directory type <code>npm start</code>
This should open up a local host server on your computer that looks something like this</p>

<img src="images\localhost.png" alt="Localhost Screen Shot"/>

<p>From here you should be able to run the app and display on either a simulator or a device like your phone
Look below for information on how to run the app with the following options</p>

## Running Expo On IOS

**(These are instructions for Expo version 4.5.2)**
**There are two ways to run this app through Expo on IOS.**

<h3>1. Run it on your IOS computer with an IOS simulator</h3>
<ol>
  <li> Install xcode on your IOS computer (Note: It has to be on a apple computer or a virtual apple computer) </li>
  <li> Open xcode </li>
  <li>Preferences </li>
  <li> Go to Locations panel </li>
  <li> Make sure you have the latest xcode installed displayed next to "Command Line Tools" </li>
  <li> Xcode > Open Developer Tool > Simulator </li>
  <li> Either on your local host click run on IOS simulator or in your terminal click i </li>
</ol>
<h3>2. Run it on your IOS device </h3>
   (Note: to run expo you must create an account on expo.io)
   <ol>
   <li> Install Expo go on your IOS device  </li>
   <li> Login on to your Expo account </li>
   <li> On your local host machine click send link with email (note: At first scanning the QR code will not work ) </li>
   <li> It will prompt you to sign in with expo on your terminal </li>
   <li> After signing in, you will get an email > Click that email on your IOS device and open with Expo go </li>
   </ol>

## Running Expo On Android

**(These are instructions for Expo version 4.5.2)**
**There are two ways to run this app through Expo on Android**

<h3>1. Run it on your computer with an Android simulator</h3>
<ol>
   <li> Download Android studios <a href="https://developer.android.com/studio/?gclsrc=ds&gclsrc=ds">Android Studios Download Link</a>  </li>
   <li> Click configure in the bottom right  </li>
   <li> Click SDK Manager  </li>
      (Note: Step d., e., and f. are just checks and should be install if you clicked standard install)
   <li> "SDK Platforms" > make sure you have the latest stable version of android  </li>
   <li> "SDK tools" > make sure you have "Android SDK Build-Tools ...", "Android Emulator", "Android SDK Platoform-Tools" and "Intel x86 Emulator Accelerator..." </li>
   <li> Click Ok/Apply  </li>
   <li> Click Configure > AVD Manager  </li>
   <li> Click Create virtual device  </li>
   <li> Select a device to emulate (I Selected pixel 3a has play store)  </li>
   <li> Select Operating System to emulate. (I Selected Q)  </li>
   <li> Once applied choose your emulator and click run  </li>
   <li> On local host Select run on android device/emulator or place "a" in terminal  </li>
 </ol>
<h3>2. Run it on your Android device </h3>
<ol>
   <li> To be determined  </li>
</ol>

## Debugging

There are mutliple ways to debug

<h3>1. Debug from a physical Device</h3>
   <ol>
   <li>Connect to local host</li>
   <li>Shake device</li>
   <li>Click start remote debugging</li>
   <li>A new page will open on your computer</li>
   </ol>
   You can debug here in the console. You can also set breakpoints here similar to debugging a web application

<h3>2. Debug with emulator</h3>
   Run <code>npx react-native log-ios</code> (for ios emulators)
   Run <code>npx react-native log-android</code> (for android emulators)
