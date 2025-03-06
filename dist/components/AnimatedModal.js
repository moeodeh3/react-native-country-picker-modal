'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');

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

const {
  height
} = reactNative.Dimensions.get('window');
const duration = 300;
const useNativeDriver = true;
const AnimatedModal = ({
  children,
  visible = false
}) => {
  const translateY = React__namespace.useRef(new reactNative.Animated.Value(height)).current;
  const showModal = () => {
    reactNative.Animated.timing(translateY, {
      toValue: 0,
      duration,
      useNativeDriver
    }).start();
  };
  const hideModal = () => {
    reactNative.Animated.timing(translateY, {
      toValue: height,
      duration,
      useNativeDriver
    }).start();
  };
  React__namespace.useEffect(() => {
    if (visible) {
      showModal();
    } else {
      hideModal();
    }
  }, [visible]);
  return jsxRuntime.jsx(reactNative.Animated.View, {
    style: {
      ...reactNative.StyleSheet.absoluteFillObject,
      transform: [{
        translateY
      }],
      zIndex: 99
    },
    children: children
  });
};

exports.AnimatedModal = AnimatedModal;
//# sourceMappingURL=AnimatedModal.js.map
