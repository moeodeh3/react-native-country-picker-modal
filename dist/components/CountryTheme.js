'use strict';

var reactThemeProvider = require('@callstack/react-theme-provider');
var reactNative = require('react-native');
var ratio = require('./ratio.js');

const DEFAULT_THEME = {
  primaryColor: '#ccc',
  primaryColorVariant: '#eee',
  backgroundColor: '#ffffff',
  onBackgroundTextColor: '#000000',
  fontSize: 16,
  fontFamily: reactNative.Platform.select({
    ios: 'System',
    android: 'Roboto',
    web: 'Arial'
  }),
  filterPlaceholderTextColor: '#aaa',
  activeOpacity: 0.5,
  itemHeight: ratio.getHeightPercent(7),
  flagSize: reactNative.Platform.select({
    android: 20,
    default: 30
  }),
  flagSizeButton: reactNative.Platform.select({
    android: 20,
    default: 30
  })
};
({
  ...DEFAULT_THEME});
const {
  ThemeProvider,
  useTheme
} = reactThemeProvider.createTheming(DEFAULT_THEME);

exports.DEFAULT_THEME = DEFAULT_THEME;
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
//# sourceMappingURL=CountryTheme.js.map
