'use strict';

var reactNative = require('react-native');

const {
  height
} = reactNative.Dimensions.get('window');
// Remove the status bar height
// since the modal view does not cover this area
const ANDROID_MINUS_HEIGHT = 24;
const DEFAULT_HEIGHT = reactNative.Platform.OS === 'android' ? height - ANDROID_MINUS_HEIGHT : height;
const getHeightPercent = percentage => Math.round(DEFAULT_HEIGHT * (percentage / 100));

exports.getHeightPercent = getHeightPercent;
//# sourceMappingURL=ratio.js.map
