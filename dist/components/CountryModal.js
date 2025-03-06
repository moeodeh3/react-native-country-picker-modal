'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');
var AnimatedModal = require('./AnimatedModal.js');
var CountryTheme = require('./CountryTheme.js');
var CountryModalProvider = require('./CountryModalProvider.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
const CountryModal = ({
  children,
  withModal = true,
  disableNativeModal = false,
  animationType = 'slide',
  ...props
}) => {
  const {
    backgroundColor
  } = CountryTheme.useTheme();
  const {
    teleport
  } = React__namespace.useContext(CountryModalProvider.CountryModalContext);
  const content = jsxRuntime.jsx(reactNative.SafeAreaView, {
    style: [styles.container, {
      backgroundColor
    }],
    children: children
  });
  React__namespace.useEffect(() => {
    if (disableNativeModal) {
      teleport(jsxRuntime.jsx(AnimatedModal.AnimatedModal, {
        ...props,
        children: content
      }));
    }
  }, [disableNativeModal]);
  if (withModal) {
    if (reactNative.Platform.OS === 'web') {
      return jsxRuntime.jsx(reactNative.Modal, {
        ...props,
        animationType: animationType,
        children: content
      });
    }
    if (disableNativeModal) {
      return null;
    }
    return jsxRuntime.jsx(reactNative.Modal, {
      ...props,
      animationType: animationType,
      children: content
    });
  }
  return content;
};

exports.CountryModal = CountryModal;
//# sourceMappingURL=CountryModal.js.map
