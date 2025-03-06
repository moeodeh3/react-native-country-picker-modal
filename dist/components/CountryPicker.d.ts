import React, { ReactNode } from 'react';
import { ModalProps, FlatListProps, StyleProp, ViewStyle, ImageSourcePropType, ImageStyle } from 'react-native';
import { Country, CountryCode, Region, Subregion } from './types';
import { CountryFilter, CountryFilterProps } from './CountryFilter';
import { FlagButton } from './FlagButton';
interface CountryPickerProps {
    allowFontScaling?: boolean;
    countryCode?: CountryCode;
    region?: Region;
    subregion?: Subregion;
    countryCodes?: CountryCode[];
    excludeCountries?: CountryCode[];
    preferredCountries?: CountryCode[];
    modalProps?: ModalProps;
    filterProps?: CountryFilterProps;
    flatListProps?: FlatListProps<Country>;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withFlagButton?: boolean;
    withCloseButton?: boolean;
    withFilter?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    withFlag?: boolean;
    withModal?: boolean;
    disableNativeModal?: boolean;
    visible?: boolean;
    placeholder?: string;
    containerButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImage?: ImageSourcePropType;
    closeButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImageStyle?: StyleProp<ImageStyle>;
    renderFlagButton?(props: React.ComponentProps<typeof FlagButton>): ReactNode;
    renderCountryFilter?(props: React.ComponentProps<typeof CountryFilter>): ReactNode;
    onSelect(country: Country): void;
    onOpen?(): void;
    onClose?(): void;
}
export declare const CountryPicker: ({ allowFontScaling, countryCode, region, subregion, countryCodes, renderFlagButton: renderButton, renderCountryFilter, filterProps, modalProps, flatListProps, onSelect, withEmoji, withFilter, withCloseButton, withCountryNameButton, withCallingCodeButton, withCurrencyButton, containerButtonStyle, withAlphaFilter, withCallingCode, withCurrency, withFlag, withModal, disableNativeModal, withFlagButton, onClose: handleClose, onOpen: handleOpen, closeButtonImage, closeButtonStyle, closeButtonImageStyle, excludeCountries, placeholder, preferredCountries, ...props }: CountryPickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CountryPicker.d.ts.map