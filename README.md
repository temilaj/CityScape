# City Scape
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 

Simple app to demonstrate security, social authentication and realtime date in cross platform mobile apps, using the ionic framework and firebase.

## Prerequisites

- Node.js and npm.
- Cordova 
- Ionic Cli

### Getting started:

Install cordova and the ionic SDK globally

```bash
$ sudo npm install -g ionic cordova
```

Clone `CityScape` into any folder of your choosing, navigate into the directory, and install dependencies.

```bash
$ git clone https://github.com/temilaj/CityScape.git
$ cd CityScape
$ npm install
```

## Development server
Run `ionic serve` for a dev server and navigate to `http://localhost:8100/` on your browser. The app will automatically reload if you change any of the source files.

## Compiling for iOS and Android

Run `ionic cordova build <platform>` to build the project for `iOS` or  `Android`. The build artifacts will be stored in the `platform/` directory. 


```bash
$ ionic cordova build android
$ ionic cordova build ios
```

## Result
### Android
![Android Showcasce](/screenshots/android-showcase.png)

### iOS
![iOS showcase](/screenshots/ios-showcase.png)

## LICENSE

#### [MIT](./LICENSE) © [Temi Lajumoke](http://temilajumoke.com)
