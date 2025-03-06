'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var CountryModal = require('./CountryModal.js');
var HeaderModal = require('./HeaderModal.js');
var types = require('./types.js');
var CountryFilter = require('./CountryFilter.js');
var FlagButton = require('./FlagButton.js');
var CountryContext = require('./CountryContext.js');
var CountryList = require('./CountryList.js');

const renderFlagButton = props => props.renderFlagButton ? props.renderFlagButton(props) : jsxRuntime.jsx(FlagButton.FlagButton, {
  ...props
});
const renderFilter = props => props.renderCountryFilter ? props.renderCountryFilter(props) : jsxRuntime.jsx(CountryFilter.CountryFilter, {
  ...props
});
const CountryPicker = ({
  allowFontScaling = true,
  countryCode,
  region,
  subregion,
  countryCodes,
  renderFlagButton: renderButton,
  renderCountryFilter,
  filterProps,
  modalProps,
  flatListProps,
  onSelect,
  withEmoji,
  withFilter,
  withCloseButton,
  withCountryNameButton,
  withCallingCodeButton,
  withCurrencyButton,
  containerButtonStyle,
  withAlphaFilter = false,
  withCallingCode = false,
  withCurrency,
  withFlag,
  withModal = true,
  disableNativeModal,
  withFlagButton,
  onClose: handleClose,
  onOpen: handleOpen,
  closeButtonImage,
  closeButtonStyle,
  closeButtonImageStyle,
  excludeCountries,
  placeholder = 'Select Country',
  preferredCountries,
  ...props
}) => {
  const [state, setState] = React.useState({
    visible: props.visible || false,
    countries: [],
    filter: '',
    filterFocus: false
  });
  const {
    translation,
    getCountriesAsync
  } = CountryContext.useContext();
  const {
    visible,
    filter,
    countries,
    filterFocus
  } = state;
  React.useEffect(() => {
    if (state.visible !== visible) {
      setState(prevState => ({
        ...prevState,
        visible: visible || false
      }));
    }
  }, [visible]);
  const onOpen = () => {
    setState(prevState => ({
      ...prevState,
      visible: true
    }));
    if (handleOpen) {
      handleOpen();
    }
  };
  const onClose = () => {
    setState(prevState => ({
      ...prevState,
      filter: '',
      visible: false
    }));
    if (handleClose) {
      handleClose();
    }
  };
  const setFilter = filter => setState(prevState => ({
    ...prevState,
    filter
  }));
  const setCountries = countries => setState(prevState => ({
    ...prevState,
    countries
  }));
  const onSelectClose = country => {
    onSelect(country);
    onClose();
  };
  const onFocus = () => setState(prevState => ({
    ...prevState,
    filterFocus: true
  }));
  const onBlur = () => setState(prevState => ({
    ...prevState,
    filterFocus: false
  }));
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
    placeholder
  };
  React.useEffect(() => {
    let cancel = false;
    getCountriesAsync(withEmoji ? types.FlagType.EMOJI : types.FlagType.FLAT, translation, region, subregion, countryCodes, excludeCountries, preferredCountries, withAlphaFilter).then(fetchedCountries => {
      if (!cancel) setCountries(fetchedCountries);
    }).catch(console.warn);
    return () => {
      cancel = true;
    };
  }, [translation, withEmoji]);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [withModal && renderFlagButton(flagProp), jsxRuntime.jsxs(CountryModal.CountryModal, {
      visible,
      withModal,
      disableNativeModal,
      ...modalProps,
      onRequestClose: onClose,
      onDismiss: onClose,
      children: [jsxRuntime.jsx(HeaderModal.HeaderModal, {
        withFilter,
        onClose,
        closeButtonImage,
        closeButtonImageStyle,
        closeButtonStyle,
        withCloseButton,
        renderFilter: props => renderFilter({
          ...props,
          allowFontScaling,
          renderCountryFilter,
          onChangeText: setFilter,
          value: filter,
          onFocus,
          onBlur,
          ...filterProps
        })
      }), jsxRuntime.jsx(CountryList.CountryList, {
        onSelect: onSelectClose,
        data: countries,
        letters: [],
        withAlphaFilter: withAlphaFilter && filter === '',
        withCallingCode,
        withCurrency,
        withFlag,
        withEmoji,
        filter,
        filterFocus,
        flatListProps
      })]
    })]
  });
};

exports.CountryPicker = CountryPicker;
//# sourceMappingURL=CountryPicker.js.map
