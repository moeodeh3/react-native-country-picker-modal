import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { CountryModal } from './CountryModal';
import { HeaderModal } from './HeaderModal';
import { FlagType } from './types';
import { CountryFilter } from './CountryFilter';
import { FlagButton } from './FlagButton';
import { useContext } from './CountryContext';
import { CountryList } from './CountryList';
const renderFlagButton = (props) => props.renderFlagButton ? props.renderFlagButton(props) : _jsx(FlagButton, { ...props });
const renderFilter = (props) => props.renderCountryFilter ? props.renderCountryFilter(props) : _jsx(CountryFilter, { ...props });
export const CountryPicker = ({ allowFontScaling = true, countryCode, region, subregion, countryCodes, renderFlagButton: renderButton, renderCountryFilter, filterProps, modalProps, flatListProps, onSelect, withEmoji, withFilter, withCloseButton, withCountryNameButton, withCallingCodeButton, withCurrencyButton, containerButtonStyle, withAlphaFilter = false, withCallingCode = false, withCurrency, withFlag, withModal = true, disableNativeModal, withFlagButton, onClose: handleClose, onOpen: handleOpen, closeButtonImage, closeButtonStyle, closeButtonImageStyle, excludeCountries, placeholder = 'Select Country', preferredCountries, ...props }) => {
    const [state, setState] = useState({
        visible: props.visible || false,
        countries: [],
        filter: '',
        filterFocus: false,
    });
    const { translation, getCountriesAsync } = useContext();
    const { visible, filter, countries, filterFocus } = state;
    useEffect(() => {
        if (state.visible !== visible) {
            setState((prevState) => ({ ...prevState, visible: visible || false }));
        }
    }, [visible]);
    const onOpen = () => {
        setState((prevState) => ({ ...prevState, visible: true }));
        if (handleOpen) {
            handleOpen();
        }
    };
    const onClose = () => {
        setState((prevState) => ({ ...prevState, filter: '', visible: false }));
        if (handleClose) {
            handleClose();
        }
    };
    const setFilter = (filter) => setState((prevState) => ({ ...prevState, filter }));
    const setCountries = (countries) => setState((prevState) => ({ ...prevState, countries }));
    const onSelectClose = (country) => {
        onSelect(country);
        onClose();
    };
    const onFocus = () => setState((prevState) => ({ ...prevState, filterFocus: true }));
    const onBlur = () => setState((prevState) => ({ ...prevState, filterFocus: false }));
    const flagProp = {
        allowFontScaling,
        countryCode,
        withEmoji,
        withCountryNameButton,
        withCallingCodeButton,
        withCurrencyButton,
        withFlagButton,
        renderFlagButton: renderButton,
        onOpen,
        containerButtonStyle,
        placeholder,
    };
    useEffect(() => {
        let cancel = false;
        getCountriesAsync(withEmoji ? FlagType.EMOJI : FlagType.FLAT, translation, region, subregion, countryCodes, excludeCountries, preferredCountries, withAlphaFilter)
            .then((fetchedCountries) => {
            if (!cancel)
                setCountries(fetchedCountries);
        })
            .catch(console.warn);
        return () => {
            cancel = true;
        };
    }, [translation, withEmoji]);
    return (_jsxs(_Fragment, { children: [withModal && renderFlagButton(flagProp), _jsxs(CountryModal, { visible, withModal, disableNativeModal, ...modalProps, onRequestClose: onClose, onDismiss: onClose, children: [_jsx(HeaderModal, { withFilter,
                        onClose,
                        closeButtonImage,
                        closeButtonImageStyle,
                        closeButtonStyle,
                        withCloseButton, renderFilter: (props) => renderFilter({
                            ...props,
                            allowFontScaling,
                            renderCountryFilter,
                            onChangeText: setFilter,
                            value: filter,
                            onFocus,
                            onBlur,
                            ...filterProps,
                        }) }), _jsx(CountryList, { onSelect: onSelectClose,
                        data: countries,
                        letters: [],
                        withAlphaFilter: withAlphaFilter && filter === '',
                        withCallingCode,
                        withCurrency,
                        withFlag,
                        withEmoji,
                        filter,
                        filterFocus,
                        flatListProps })] })] }));
};
//# sourceMappingURL=CountryPicker.js.map