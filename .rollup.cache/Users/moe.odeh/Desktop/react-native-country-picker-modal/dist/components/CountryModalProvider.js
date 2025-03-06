import { jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
export const CountryModalContext = React.createContext({
    gate: undefined,
    teleport: undefined,
});
export const CountryModalProvider = ({ children }) => {
    const [gate, setGate] = React.useState(undefined);
    const teleport = (element) => setGate(element);
    return (_jsxs(CountryModalContext.Provider, { value: { gate, teleport }, children: [children, gate] }));
};
//# sourceMappingURL=CountryModalProvider.js.map