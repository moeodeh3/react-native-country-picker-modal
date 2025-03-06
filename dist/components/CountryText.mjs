import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsx } from 'react/jsx-runtime';
import { Text } from 'react-native';
import { useTheme } from './CountryTheme.mjs';

var CountryText = function CountryText(props) {
  var _useTheme = useTheme(),
    fontFamily = _useTheme.fontFamily,
    fontSize = _useTheme.fontSize,
    onBackgroundTextColor = _useTheme.onBackgroundTextColor;
  return jsx(Text, _objectSpread2(_objectSpread2({}, props), {}, {
    style: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: onBackgroundTextColor
    }
  }));
};

export { CountryText };
//# sourceMappingURL=CountryText.mjs.map
