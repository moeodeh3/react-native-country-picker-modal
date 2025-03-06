'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var CountryTheme = require('./CountryTheme.js');

const styles = reactNative.StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...reactNative.Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0
      }
    })
  }
});
const CountryFilter = ({
  autoFocus = false,
  placeholder = 'Enter country name',
  ...props
}) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.TextInput, {
    testID: 'text-input-country-filter',
    autoCorrect: false,
    autoFocus: autoFocus,
    placeholder: placeholder,
    placeholderTextColor: filterPlaceholderTextColor,
    style: [styles.input, {
      fontFamily,
      fontSize,
      color: onBackgroundTextColor
    }],
    ...props
  });
};

exports.CountryFilter = CountryFilter;
//# sourceMappingURL=CountryFilter.js.map
