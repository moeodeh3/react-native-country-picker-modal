import { objectSpread2 as _objectSpread2, objectWithoutProperties as _objectWithoutProperties } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsx } from 'react/jsx-runtime';
import { StyleSheet, Platform, TextInput } from 'react-native';
import { useTheme } from './CountryTheme.mjs';

var _excluded = ["autoFocus", "placeholder"];
var styles = StyleSheet.create({
  input: _objectSpread2({
    height: 48,
    width: '70%'
  }, Platform.select({
    web: {
      outlineWidth: 0,
      outlineColor: 'transparent',
      outlineOffset: 0
    }
  }))
});
var CountryFilter = function CountryFilter(_ref) {
  var _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Enter country name' : _ref$placeholder,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTheme = useTheme(),
    filterPlaceholderTextColor = _useTheme.filterPlaceholderTextColor,
    fontFamily = _useTheme.fontFamily,
    fontSize = _useTheme.fontSize,
    onBackgroundTextColor = _useTheme.onBackgroundTextColor;
  return jsx(TextInput, _objectSpread2({
    testID: 'text-input-country-filter',
    autoCorrect: false,
    autoFocus: autoFocus,
    placeholder: placeholder,
    placeholderTextColor: filterPlaceholderTextColor,
    style: [styles.input, {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: onBackgroundTextColor
    }]
  }, props));
};

export { CountryFilter };
//# sourceMappingURL=CountryFilter.mjs.map
