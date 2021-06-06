# react-native-switch-toggle

> Simple switch toggle component for react-native. This component supports horizontal switch toggle with animation with several options like start/end background colors, start/end circle colors, and duration for animation.

[![Npm Version](http://img.shields.io/npm/v/react-native-switch-toggle.svg?style=flat-square)](https://npmjs.org/package/react-native-switch-toggle)
[![Downloads](http://img.shields.io/npm/dm/react-native-switch-toggle.svg?style=flat-square)](https://npmjs.org/package/react-native-switch-toggle)
[![CI](https://github.com/hyochan/react-native-switch-toggle/actions/workflows/ci.yml/badge.svg)](https://github.com/hyochan/react-native-switch-toggle/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/hyochan/react-native-switch-toggle/branch/master/graph/badge.svg?token=yLFcpGSuku)](https://codecov.io/gh/hyochan/react-native-switch-toggle)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![LICENSE](http://img.shields.io/npm/l/react-native-switch-toggle.svg?style=flat-square)](https://npmjs.org/package/react-native-switch-toggle)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://itunes.apple.com/app/apple-store/id982107779)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
[![supports web](https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://docs.expo.io/workflow/web/)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://github.com/expo/expo)


<img src="https://user-images.githubusercontent.com/27461460/120913849-32f23580-c6d5-11eb-90bc-be0a97125427.gif" height=400 />

## News

Current package is fully redesigned in `2.0.0`. We recommend you to use this package version `>=2.0.0`.

## Alternative

Do you enjoy using `react-native-switch-toggle`? Then think about using [dooboo-ui](https://github.com/dooboolab/dooboo-ui) which is our ui integrated ilbrary. It included `SwitchToggle` from `0.1.6`.

```
yarn add doobo-ui
```

## Props

|                      | necessary | types   | default                                                  |
| -------------------- | --------- | ------- | -------------------------------------------------------- |
| switchOn             | ✓         | boolean | false                                                    |
| onPress              | ✓         | func    | () => {}                                                 |
| containerStyle       |           | styles  | { width: 80, height: 40, borderRadius: 25 ... }          |
| circleStyle          |           | styles  | { width: 32, height: 32, borderRadius: 16 ... }          |
| backgroundColorOn    |           | string  | 'black'   |
| backgroundColorOff   |           | string  | '#C4C4C4' |
| circleColorOn        |           | string  | 'white'   |
| circleColorOff       |           | string  | '#C4C4C4' |
| duration             |           | number  | 300       |
| type                 |           | number  | 0 - Normal switch, 1 - Switch with a text                |
| buttonText           |           | string  | Text on-top of the button                                |
| backTextRight        |           | string  | Text to appear in right side when button toggled to left |
| backTextLeft         |           | string  | Text to appear in left side when button toggled to right |
| buttonTextStyle      |           | styles  | Styles for text on the button                            |
| textRightStyle       |           | styles  | Styles for text in right                                 |
| textLeftStyle        |           | styles  | Styles for text in left                                  |
| buttonStyle          |           | styles  | Styles for the button                                    |
| buttonContainerStyle |           | styles  | Styles for button container                              |
| rightContainerStyle  |           | styles  | Styles for right text container                          |
| leftContainerStyle   |           | styles  | Styles for left text container                           |

## Getting started

`$ npm install react-native-switch-toggle --save`

```javascript
import SwitchToggle from "react-native-switch-toggle";
```

#### Basic Style
```jsx
<SwitchToggle switchOn={on} onPress={() => off(!on)} />
```

#### Custom Color
```jsx
<SwitchToggle
  switchOn={on}
  onPress={() => off(!on)}
  circleColorOff='#C4C4C4'
  circleColorOn='#00D9D5'
  backgroundColorOn='#6D6D6D'
  backgroundColorOff='#C4C4C4'
/>
```

### Custom Size
```jsx
<SwitchToggle
  switchOn={on}
  onPress={() => off(!on)}
  containerStyle={{
    marginTop: 16,
    width: 106,
    height: 48,
    borderRadius: 25,
    padding: 5,
  }}
  circleStyle={{
    width: 40,
    height: 40,
    borderRadius: 20,
  }}
/>
```
