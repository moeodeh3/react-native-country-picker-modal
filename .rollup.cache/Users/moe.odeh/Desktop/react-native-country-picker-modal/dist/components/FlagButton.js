import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, memo } from 'react';
import { TouchableOpacity, StyleSheet, View, } from 'react-native';
import { Flag } from './Flag';
import { useContext } from './CountryContext';
import { CountryText } from './CountryText';
import { useTheme } from './CountryTheme';
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    containerWithEmoji: {
        marginTop: 0,
    },
    containerWithoutEmoji: {
        marginTop: 5,
    },
    flagWithSomethingContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    something: { fontSize: 16 },
});
const FlagText = (props) => (_jsx(CountryText, { ...props, style: styles.something }));
const FlagWithSomething = memo(({ allowFontScaling, countryCode, withEmoji = true, withCountryNameButton = false, withCurrencyButton = false, withCallingCodeButton = false, withFlagButton = true, flagSize, placeholder, }) => {
    const { translation, getCountryInfoAsync } = useContext();
    const [state, setState] = useState({
        countryName: '',
        currency: '',
        callingCode: '',
    });
    const { countryName, currency, callingCode } = state;
    useEffect(() => {
        if (countryCode) {
            getCountryInfoAsync({ countryCode, translation })
                .then(setState)
                .catch(console.warn);
        }
    }, [
        countryCode,
        withCountryNameButton,
        withCurrencyButton,
        withCallingCodeButton,
    ]);
    return (_jsxs(View, { style: styles.flagWithSomethingContainer, children: [countryCode ? (_jsx(Flag, { withEmoji, countryCode, withFlagButton, flagSize })) : (_jsx(FlagText, { allowFontScaling: allowFontScaling, children: placeholder })), withCountryNameButton && countryName ? (_jsx(FlagText, { allowFontScaling: allowFontScaling, children: countryName + ' ' })) : null, withCurrencyButton && currency ? (_jsx(FlagText, { allowFontScaling: allowFontScaling, children: `(${currency}) ` })) : null, withCallingCodeButton && callingCode ? (_jsx(FlagText, { allowFontScaling: allowFontScaling, children: `+${callingCode}` })) : null] }));
});
export const FlagButton = ({ allowFontScaling = true, withEmoji = true, withCountryNameButton = false, withCallingCodeButton = false, withCurrencyButton = false, withFlagButton = true, countryCode, containerButtonStyle, onOpen, placeholder, }) => {
    const { flagSizeButton: flagSize } = useTheme();
    return (_jsx(TouchableOpacity, { activeOpacity: 0.7, onPress: onOpen, children: _jsx(View, { style: [
                styles.container,
                withEmoji ? styles.containerWithEmoji : styles.containerWithoutEmoji,
                containerButtonStyle,
            ], children: _jsx(FlagWithSomething, { allowFontScaling,
                countryCode,
                withEmoji,
                withCountryNameButton,
                withCallingCodeButton,
                withCurrencyButton,
                withFlagButton,
                flagSize: flagSize,
                placeholder }) }) }));
};
//# sourceMappingURL=FlagButton.js.map