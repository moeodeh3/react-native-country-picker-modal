'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var CountryTheme = require('./CountryTheme.js');

const CountryText = props => {
  const {
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.Text, {
    ...props,
    style: {
      fontFamily,
      fontSize,
      color: onBackgroundTextColor
    }
  });
};

exports.CountryText = CountryText;
//# sourceMappingURL=CountryText.js.map
