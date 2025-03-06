import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsxs } from 'react/jsx-runtime';
import * as React from 'react';

var CountryModalContext = /*#__PURE__*/React.createContext({
  gate: undefined,
  teleport: undefined
});
var CountryModalProvider = function CountryModalProvider(_ref) {
  var children = _ref.children;
  var _React$useState = React.useState(undefined),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    gate = _React$useState2[0],
    setGate = _React$useState2[1];
  var teleport = function teleport(element) {
    return setGate(element);
  };
  return jsxs(CountryModalContext.Provider, {
    value: {
      gate: gate,
      teleport: teleport
    },
    children: [children, gate]
  });
};

export { CountryModalContext, CountryModalProvider };
//# sourceMappingURL=CountryModalProvider.mjs.map
