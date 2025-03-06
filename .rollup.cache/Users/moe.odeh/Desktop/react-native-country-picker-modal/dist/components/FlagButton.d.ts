import { StyleProp, ViewStyle } from 'react-native';
import { CountryCode } from './types';
export interface FlagButtonProps {
    allowFontScaling?: boolean;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withFlagButton?: boolean;
    containerButtonStyle?: StyleProp<ViewStyle>;
    countryCode?: CountryCode;
    placeholder: string;
    onOpen?(): void;
}
export declare const FlagButton: ({ allowFontScaling, withEmoji, withCountryNameButton, withCallingCodeButton, withCurrencyButton, withFlagButton, countryCode, containerButtonStyle, onOpen, placeholder, }: FlagButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FlagButton.d.ts.map