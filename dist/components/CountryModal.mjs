import { objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Platform, Modal } from 'react-native';
import { AnimatedModal } from './AnimatedModal.mjs';
import { useTheme } from './CountryTheme.mjs';
import { CountryModalContext } from './CountryModalProvider.mjs';

var _excluded = ["children", "withModal", "disableNativeModal", "animationType"];
var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
var CountryModal = function CountryModal(_ref) {
  var children = _ref.children,
    _ref$withModal = _ref.withModal,
    withModal = _ref$withModal === void 0 ? true : _ref$withModal,
    _ref$disableNativeMod = _ref.disableNativeModal,
    disableNativeModal = _ref$disableNativeMod === void 0 ? false : _ref$disableNativeMod,
    _ref$animationType = _ref.animationType,
    animationType = _ref$animationType === void 0 ? 'slide' : _ref$animationType,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTheme = useTheme(),
    backgroundColor = _useTheme.backgroundColor;
  var _React$useContext = React.useContext(CountryModalContext),
    teleport = _React$useContext.teleport;
  var content = jsx(SafeAreaView, {
    style: [styles.container, {
      backgroundColor: backgroundColor
    }],
    children: children
  });
  React.useEffect(function () {
    if (disableNativeModal) {
      teleport(jsx(AnimatedModal, _objectSpread2(_objectSpread2({}, props), {}, {
        children: content
      })));
    }
  }, [disableNativeModal]);
  if (withModal) {
    if (Platform.OS === 'web') {
      return jsx(Modal, _objectSpread2(_objectSpread2({}, props), {}, {
        animationType: animationType,
        children: content
      }));
    }
    if (disableNativeModal) {
      return null;
    }
    return jsx(Modal, _objectSpread2(_objectSpread2({}, props), {}, {
      animationType: animationType,
      children: content
    }));
  }
  return content;
};

export { CountryModal };
//# sourceMappingURL=CountryModal.mjs.map
