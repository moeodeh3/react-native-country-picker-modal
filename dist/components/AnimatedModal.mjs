import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Dimensions, Animated, StyleSheet } from 'react-native';

var _Dimensions$get = Dimensions.get('window'),
  height = _Dimensions$get.height;
var duration = 300;
var useNativeDriver = true;
var AnimatedModal = function AnimatedModal(_ref) {
  var children = _ref.children,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible;
  var translateY = React.useRef(new Animated.Value(height)).current;
  var showModal = function showModal() {
    Animated.timing(translateY, {
      toValue: 0,
      duration: duration,
      useNativeDriver: useNativeDriver
    }).start();
  };
  var hideModal = function hideModal() {
    Animated.timing(translateY, {
      toValue: height,
      duration: duration,
      useNativeDriver: useNativeDriver
    }).start();
  };
  React.useEffect(function () {
    if (visible) {
      showModal();
    } else {
      hideModal();
    }
  }, [visible]);
  return jsx(Animated.View, {
    style: _objectSpread2(_objectSpread2({}, StyleSheet.absoluteFillObject), {}, {
      transform: [{
        translateY: translateY
      }],
      zIndex: 99
    }),
    children: children
  });
};

export { AnimatedModal };
//# sourceMappingURL=AnimatedModal.mjs.map
