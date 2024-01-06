# React Native Dictionary App 📖

This project is meant to be a starter guide to learning React Native** while also practicing working with external APIs

## Who is this for?

This project is designed for recent graduates or students who are already familiar with **React** and comfortable working with JavaScript.

You will also notice this project uses Axios, if you are not familiar with it you can easily replace the logic with a normal fetch.

## Some theory before start 

[React Native](https://reactnative.dev/docs/getting-started) is an open-source framework developed by Facebook/Meta for building cross-platform mobile applications. It allows developers to write code in JavaScript and create native-like apps for iOS and Android platforms. 

When creating a React or Vanilla JS project, you can see the product of your code in the browser, in this case, things are different - as React Native develops a mobile app, usually you will need to setup Android Studio or Xcode tools to run the code in a iPhone or android emulators.

However fear not, this project uses [React Native Expo](https://reactnative.dev/docs/environment-setup), so you will be able to run your code on your own mobile phone as we will explain in the following section.

You will see that React Native components import React and uses hooks in the same way in a web-app, but instead of h1 and div you have a set of in-built components, like Tetx and View.

Look at the before-linked documentation to know more about how to use them.

## Getting started

Once you cloned the repository on your own machine

`cd react-native-dictionary-app`

Run in the terminal

`yarn expo start`

You will see a QR code, download the Expo Go app on your own mobile device to scan it and so see your dictionary app!

## Functionality and structure overview

This project is partially started, so once you get it up and running, before starting any code, take your time to take a look at the existing one - which is actually a good exercises to prepare you for your day-to-day as a professional developer!

As a summary, under src/ you will find

* a component folder, containing already the basic part of the application, like a searchBar component, a core subfolder with a card component
* a style folder, which contains a helper and themes files: like a real-life project, this dictionary uses a unified way to handle styling to ensure all part of the app looks coherents
* an API folder, with already the connection to the (dictionary api)[and https://dictionaryapi.dev/]
* A Context provider - if you never used this before, check the [React documentation](and https://react.dev/learn/passing-data-deeply-with-context) about Context and useContext - it's a way to share information across components avoiding overusing props. We suggest using it as it is a good practice to avoid prop drilling! 
  
## Code the next steps!

Once you are familiar with the existing code and with the dictionary API

* Display the results from the get call in the way you prefer: you can choose to display besides the definitions also the phonetics, synonyms and other info about the searched word
* Improve the styling by modifying the current styling helpers and palette, and ensure all your components look the same! 
* Add error handling flow: right now we are not handling possible errors, ensure your code is ready in case a 404 arrives!

**Extra**

* Add a [new API](https://www.pexels.com/api/documentation/)to this project to show also an image representing the searched word
* Personalise the app even more by incorporating a custom font


## Additional Resources

* To find [color inspiration](https://colorhunt.co/)
* [React Native components](the https://reactnative.dev/docs/components-and-apis)
  
