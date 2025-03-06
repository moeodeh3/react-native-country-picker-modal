import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { CountryModal } from './CountryModal.mjs';
import { HeaderModal } from './HeaderModal.mjs';
import { FlagType } from './types.mjs';
import { CountryFilter } from './CountryFilter.mjs';
import { FlagButton } from './FlagButton.mjs';
import { useContext } from './CountryContext.mjs';
import { CountryList } from './CountryList.mjs';

var _excluded = ["allowFontScaling", "countryCode", "region", "subregion", "countryCodes", "renderFlagButton", "renderCountryFilter", "filterProps", "modalProps", "flatListProps", "onSelect", "withEmoji", "withFilter", "withCloseButton", "withCountryNameButton", "withCallingCodeButton", "withCurrencyButton", "containerButtonStyle", "withAlphaFilter", "withCallingCode", "withCurrency", "withFlag", "withModal", "disableNativeModal", "withFlagButton", "onClose", "onOpen", "closeButtonImage", "closeButtonStyle", "closeButtonImageStyle", "excludeCountries", "placeholder", "preferredCountries"];
var renderFlagButton = function renderFlagButton(props) {
  return props.renderFlagButton ? props.renderFlagButton(props) : jsx(FlagButton, _objectSpread2({}, props));
};
var _renderFilter = function renderFilter(props) {
  return props.renderCountryFilter ? props.renderCountryFilter(props) : jsx(CountryFilter, _objectSpread2({}, props));
};
var CountryPicker = function CountryPicker(_ref) {
  var _ref$allowFontScaling = _ref.allowFontScaling,
    allowFontScaling = _ref$allowFontScaling === void 0 ? true : _ref$allowFontScaling,
    countryCode = _ref.countryCode,
    region = _ref.region,
    subregion = _ref.subregion,
    countryCodes = _ref.countryCodes,
    renderButton = _ref.renderFlagButton,
    renderCountryFilter = _ref.renderCountryFilter,
    filterProps = _ref.filterProps,
    modalProps = _ref.modalProps,
    flatListProps = _ref.flatListProps,
    onSelect = _ref.onSelect,
    withEmoji = _ref.withEmoji,
    withFilter = _ref.withFilter,
    withCloseButton = _ref.withCloseButton,
    withCountryNameButton = _ref.withCountryNameButton,
    withCallingCodeButton = _ref.withCallingCodeButton,
    withCurrencyButton = _ref.withCurrencyButton,
    containerButtonStyle = _ref.containerButtonStyle,
    _ref$withAlphaFilter = _ref.withAlphaFilter,
    withAlphaFilter = _ref$withAlphaFilter === void 0 ? false : _ref$withAlphaFilter,
    _ref$withCallingCode = _ref.withCallingCode,
    withCallingCode = _ref$withCallingCode === void 0 ? false : _ref$withCallingCode,
    withCurrency = _ref.withCurrency,
    withFlag = _ref.withFlag,
    _ref$withModal = _ref.withModal,
    withModal = _ref$withModal === void 0 ? true : _ref$withModal,
    disableNativeModal = _ref.disableNativeModal,
    withFlagButton = _ref.withFlagButton,
    handleClose = _ref.onClose,
    handleOpen = _ref.onOpen,
    closeButtonImage = _ref.closeButtonImage,
    closeButtonStyle = _ref.closeButtonStyle,
    closeButtonImageStyle = _ref.closeButtonImageStyle,
    excludeCountries = _ref.excludeCountries,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Select Country' : _ref$placeholder,
    preferredCountries = _ref.preferredCountries,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState({
      visible: props.visible || false,
      countries: [],
      filter: '',
      filterFocus: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useContext = useContext(),
    translation = _useContext.translation,
    getCountriesAsync = _useContext.getCountriesAsync;
  var visible = state.visible,
    filter = state.filter,
    countries = state.countries,
    filterFocus = state.filterFocus;
  useEffect(function () {
    if (state.visible !== visible) {
      setState(function (prevState) {
        return _objectSpread2(_objectSpread2({}, prevState), {}, {
          visible: visible || false
        });
      });
    }
  }, [visible]);
  var onOpen = function onOpen() {
    setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        visible: true
      });
    });
    if (handleOpen) {
      handleOpen();
    }
  };
  var onClose = function onClose() {
    setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        filter: '',
        visible: false
      });
    });
    if (handleClose) {
      handleClose();
    }
  };
  var setFilter = function setFilter(filter) {
    return setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        filter: filter
      });
    });
  };
  var setCountries = function setCountries(countries) {
    return setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        countries: countries
      });
    });
  };
  var onSelectClose = function onSelectClose(country) {
    onSelect(country);
    onClose();
  };
  var onFocus = function onFocus() {
    return setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        filterFocus: true
      });
    });
  };
  var onBlur = function onBlur() {
    return setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        filterFocus: false
      });
    });
  };
  var flagProp = {
    allowFontScaling: allowFontScaling,
    countryCode: countryCode,
    withEmoji: withEmoji,
    withCountryNameButton: withCountryNameButton,
    withCallingCodeButton: withCallingCodeButton,
    withCurrencyButton: withCurrencyButton,
    withFlagButton: withFlagButton,
    renderFlagButton: renderButton,
    onOpen: onOpen,
    containerButtonStyle: containerButtonStyle,
    placeholder: placeholder
  };
  useEffect(function () {
    var cancel = false;
    getCountriesAsync(withEmoji ? FlagType.EMOJI : FlagType.FLAT, translation, region, subregion, countryCodes, excludeCountries, preferredCountries, withAlphaFilter).then(function (fetchedCountries) {
      if (!cancel) setCountries(fetchedCountries);
    })["catch"](console.warn);
    return function () {
      cancel = true;
    };
  }, [translation, withEmoji]);
  return jsxs(Fragment, {
    children: [withModal && renderFlagButton(flagProp), jsxs(CountryModal, _objectSpread2(_objectSpread2({
      visible: visible,
      withModal: withModal,
      disableNativeModal: disableNativeModal
    }, modalProps), {}, {
      onRequestClose: onClose,
      onDismiss: onClose,
      children: [jsx(HeaderModal, {
        withFilter: withFilter,
        onClose: onClose,
        closeButtonImage: closeButtonImage,
        closeButtonImageStyle: closeButtonImageStyle,
        closeButtonStyle: closeButtonStyle,
        withCloseButton: withCloseButton,
        renderFilter: function renderFilter(props) {
          return _renderFilter(_objectSpread2(_objectSpread2({}, props), {}, {
            allowFontScaling: allowFontScaling,
            renderCountryFilter: renderCountryFilter,
            onChangeText: setFilter,
            value: filter,
            onFocus: onFocus,
            onBlur: onBlur
          }, filterProps));
        }
      }), jsx(CountryList, {
        onSelect: onSelectClose,
        data: countries,
        letters: [],
        withAlphaFilter: withAlphaFilter && filter === '',
        withCallingCode: withCallingCode,
        withCurrency: withCurrency,
        withFlag: withFlag,
        withEmoji: withEmoji,
        filter: filter,
        filterFocus: filterFocus,
        flatListProps: flatListProps
      })]
    }))]
  });
};

export { CountryPicker };
//# sourceMappingURL=CountryPicker.mjs.map
