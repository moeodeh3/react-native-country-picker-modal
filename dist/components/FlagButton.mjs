import { slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { memo, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Flag } from './Flag.mjs';
import { useContext } from './CountryContext.mjs';
import { CountryText } from './CountryText.mjs';
import { useTheme } from './CountryTheme.mjs';

var styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  containerWithEmoji: {
    marginTop: 0
  },
  containerWithoutEmoji: {
    marginTop: 5
  },
  flagWithSomethingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  something: {
    fontSize: 16
  }
});
var FlagText = function FlagText(props) {
  return jsx(CountryText, _objectSpread2(_objectSpread2({}, props), {}, {
    style: styles.something
  }));
};
var FlagWithSomething = /*#__PURE__*/memo(function (_ref) {
  var allowFontScaling = _ref.allowFontScaling,
    countryCode = _ref.countryCode,
    _ref$withEmoji = _ref.withEmoji,
    withEmoji = _ref$withEmoji === void 0 ? true : _ref$withEmoji,
    _ref$withCountryNameB = _ref.withCountryNameButton,
    withCountryNameButton = _ref$withCountryNameB === void 0 ? false : _ref$withCountryNameB,
    _ref$withCurrencyButt = _ref.withCurrencyButton,
    withCurrencyButton = _ref$withCurrencyButt === void 0 ? false : _ref$withCurrencyButt,
    _ref$withCallingCodeB = _ref.withCallingCodeButton,
    withCallingCodeButton = _ref$withCallingCodeB === void 0 ? false : _ref$withCallingCodeB,
    _ref$withFlagButton = _ref.withFlagButton,
    withFlagButton = _ref$withFlagButton === void 0 ? true : _ref$withFlagButton,
    flagSize = _ref.flagSize,
    placeholder = _ref.placeholder;
  var _useContext = useContext(),
    translation = _useContext.translation,
    getCountryInfoAsync = _useContext.getCountryInfoAsync;
  var _useState = useState({
      countryName: '',
      currency: '',
      callingCode: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var countryName = state.countryName,
    currency = state.currency,
    callingCode = state.callingCode;
  useEffect(function () {
    if (countryCode) {
      getCountryInfoAsync({
        countryCode: countryCode,
        translation: translation
      }).then(setState)["catch"](console.warn);
    }
  }, [countryCode, withCountryNameButton, withCurrencyButton, withCallingCodeButton]);
  return jsxs(View, {
    style: styles.flagWithSomethingContainer,
    children: [countryCode ? jsx(Flag, {
      withEmoji: withEmoji,
      countryCode: countryCode,
      withFlagButton: withFlagButton,
      flagSize: flagSize
    }) : jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: placeholder
    }), withCountryNameButton && countryName ? jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: countryName + ' '
    }) : null, withCurrencyButton && currency ? jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: "(".concat(currency, ") ")
    }) : null, withCallingCodeButton && callingCode ? jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: "+".concat(callingCode)
    }) : null]
  });
});
var FlagButton = function FlagButton(_ref2) {
  var _ref2$allowFontScalin = _ref2.allowFontScaling,
    allowFontScaling = _ref2$allowFontScalin === void 0 ? true : _ref2$allowFontScalin,
    _ref2$withEmoji = _ref2.withEmoji,
    withEmoji = _ref2$withEmoji === void 0 ? true : _ref2$withEmoji,
    _ref2$withCountryName = _ref2.withCountryNameButton,
    withCountryNameButton = _ref2$withCountryName === void 0 ? false : _ref2$withCountryName,
    _ref2$withCallingCode = _ref2.withCallingCodeButton,
    withCallingCodeButton = _ref2$withCallingCode === void 0 ? false : _ref2$withCallingCode,
    _ref2$withCurrencyBut = _ref2.withCurrencyButton,
    withCurrencyButton = _ref2$withCurrencyBut === void 0 ? false : _ref2$withCurrencyBut,
    _ref2$withFlagButton = _ref2.withFlagButton,
    withFlagButton = _ref2$withFlagButton === void 0 ? true : _ref2$withFlagButton,
    countryCode = _ref2.countryCode,
    containerButtonStyle = _ref2.containerButtonStyle,
    onOpen = _ref2.onOpen,
    placeholder = _ref2.placeholder;
  var _useTheme = useTheme(),
    flagSize = _useTheme.flagSizeButton;
  return jsx(TouchableOpacity, {
    activeOpacity: 0.7,
    onPress: onOpen,
    children: jsx(View, {
      style: [styles.container, withEmoji ? styles.containerWithEmoji : styles.containerWithoutEmoji, containerButtonStyle],
      children: jsx(FlagWithSomething, {
        allowFontScaling: allowFontScaling,
        countryCode: countryCode,
        withEmoji: withEmoji,
        withCountryNameButton: withCountryNameButton,
        withCallingCodeButton: withCallingCodeButton,
        withCurrencyButton: withCurrencyButton,
        withFlagButton: withFlagButton,
        flagSize: flagSize,
        placeholder: placeholder
      })
    })
  });
};

export { FlagButton };
//# sourceMappingURL=FlagButton.mjs.map
