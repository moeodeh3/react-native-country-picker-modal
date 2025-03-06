import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from 'react-native';
import { useTheme } from './CountryTheme';
export const CountryText = (props) => {
    const { fontFamily, fontSize, onBackgroundTextColor } = useTheme();
    return (_jsx(Text, { ...props, style: { fontFamily, fontSize, color: onBackgroundTextColor } }));
};
//# sourceMappingURL=CountryText.js.map