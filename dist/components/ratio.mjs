import { Dimensions, Platform } from 'react-native';

var _Dimensions$get = Dimensions.get('window'),
  height = _Dimensions$get.height;
// Remove the status bar height
// since the modal view does not cover this area
var ANDROID_MINUS_HEIGHT = 24;
var DEFAULT_HEIGHT = Platform.OS === 'android' ? height - ANDROID_MINUS_HEIGHT : height;
var getHeightPercent = function getHeightPercent(percentage) {
  return Math.round(DEFAULT_HEIGHT * (percentage / 100));
};

export { getHeightPercent };
//# sourceMappingURL=ratio.mjs.map
