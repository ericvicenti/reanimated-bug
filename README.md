# Reanimated Bug

This repo demonstrates a reanimated bug with timing.start. Tested on iOS only, haven't checked Android yet.

> See a similar example that causes Expo snack to crash: https://snack.expo.io/rkIOPnLzV

## See `App.js` for the problem.

To start:

```
open ios/nonanimated.xcodeproj
# or
react-native run-ios
```

Repo created with:

```
react-native init nonanimated
cd nonanimated
yarn add react-native-reanimated
react-native link
```
