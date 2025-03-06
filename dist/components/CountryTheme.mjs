import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { createTheming } from '@callstack/react-theme-provider';
import { Platform } from 'react-native';
import { getHeightPercent } from './ratio.mjs';

var DEFAULT_THEME = {
  primaryColor: '#ccc',
  primaryColorVariant: '#eee',
  backgroundColor: '#ffffff',
  onBackgroundTextColor: '#000000',
  fontSize: 16,
  fontFamily: Platform.select({
    ios: 'System',
    android: 'Roboto',
    web: 'Arial'
  }),
  filterPlaceholderTextColor: '#aaa',
  activeOpacity: 0.5,
  itemHeight: getHeightPercent(7),
  flagSize: Platform.select({
    android: 20,
    "default": 30
  }),
  flagSizeButton: Platform.select({
    android: 20,
    "default": 30
  })
};
_objectSpread2(_objectSpread2({}, DEFAULT_THEME), {}, {
  primaryColor: '#222',
  primaryColorVariant: '#444',
  backgroundColor: '#000',
  onBackgroundTextColor: '#fff'
});
var _createTheming = createTheming(DEFAULT_THEME);
  _createTheming.ThemeProvider;
  var useTheme = _createTheming.useTheme;

export { DEFAULT_THEME, useTheme };
//# sourceMappingURL=CountryTheme.mjs.map
