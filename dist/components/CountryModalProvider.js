'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

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

const CountryModalContext = /*#__PURE__*/React__namespace.createContext({
  gate: undefined,
  teleport: undefined
});
const CountryModalProvider = ({
  children
}) => {
  const [gate, setGate] = React__namespace.useState(undefined);
  const teleport = element => setGate(element);
  return jsxRuntime.jsxs(CountryModalContext.Provider, {
    value: {
      gate,
      teleport
    },
    children: [children, gate]
  });
};

exports.CountryModalContext = CountryModalContext;
exports.CountryModalProvider = CountryModalProvider;
//# sourceMappingURL=CountryModalProvider.js.map
