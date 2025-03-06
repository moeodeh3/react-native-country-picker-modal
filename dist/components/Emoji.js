'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');
var nodeEmoji = require('node-emoji');

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

var nodeEmoji__namespace = /*#__PURE__*/_interopNamespaceDefault(nodeEmoji);

const Emoji = /*#__PURE__*/React.memo(({
  name
}) => {
  const emoji = nodeEmoji__namespace.get(name);
  return jsxRuntime.jsx(reactNative.Text, {
    allowFontScaling: false,
    children: emoji
  });
});

exports.Emoji = Emoji;
//# sourceMappingURL=Emoji.js.map
