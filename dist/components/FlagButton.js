'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');
var Flag = require('./Flag.js');
var CountryContext = require('./CountryContext.js');
var CountryText = require('./CountryText.js');
var CountryTheme = require('./CountryTheme.js');

const styles = reactNative.StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  containerWithEmoji: {
    marginTop: 0
  },
  containerWithoutEmoji: {
    marginTop: 5
  },
  flagWithSomethingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  something: {
    fontSize: 16
  }
});
const FlagText = props => jsxRuntime.jsx(CountryText.CountryText, {
  ...props,
  style: styles.something
});
const FlagWithSomething = /*#__PURE__*/React.memo(({
  allowFontScaling,
  countryCode,
  withEmoji = true,
  withCountryNameButton = false,
  withCurrencyButton = false,
  withCallingCodeButton = false,
  withFlagButton = true,
  flagSize,
  placeholder
}) => {
  const {
    translation,
    getCountryInfoAsync
  } = CountryContext.useContext();
  const [state, setState] = React.useState({
    countryName: '',
    currency: '',
    callingCode: ''
  });
  const {
    countryName,
    currency,
    callingCode
  } = state;
  React.useEffect(() => {
    if (countryCode) {
      getCountryInfoAsync({
        countryCode,
        translation
      }).then(setState).catch(console.warn);
    }
  }, [countryCode, withCountryNameButton, withCurrencyButton, withCallingCodeButton]);
  return jsxRuntime.jsxs(reactNative.View, {
    style: styles.flagWithSomethingContainer,
    children: [countryCode ? jsxRuntime.jsx(Flag.Flag, {
      withEmoji,
      countryCode,
      withFlagButton,
      flagSize
    }) : jsxRuntime.jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: placeholder
    }), withCountryNameButton && countryName ? jsxRuntime.jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: countryName + ' '
    }) : null, withCurrencyButton && currency ? jsxRuntime.jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: `(${currency}) `
    }) : null, withCallingCodeButton && callingCode ? jsxRuntime.jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: `+${callingCode}`
    }) : null]
  });
});
const FlagButton = ({
  allowFontScaling = true,
  withEmoji = true,
  withCountryNameButton = false,
  withCallingCodeButton = false,
  withCurrencyButton = false,
  withFlagButton = true,
  countryCode,
  containerButtonStyle,
  onOpen,
  placeholder
}) => {
  const {
    flagSizeButton: flagSize
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.TouchableOpacity, {
    activeOpacity: 0.7,
    onPress: onOpen,
    children: jsxRuntime.jsx(reactNative.View, {
      style: [styles.container, withEmoji ? styles.containerWithEmoji : styles.containerWithoutEmoji, containerButtonStyle],
      children: jsxRuntime.jsx(FlagWithSomething, {
        allowFontScaling,
        countryCode,
        withEmoji,
        withCountryNameButton,
        withCallingCodeButton,
        withCurrencyButton,
        withFlagButton,
        flagSize: flagSize,
        placeholder
      })
    })
  });
};

exports.FlagButton = FlagButton;
//# sourceMappingURL=FlagButton.js.map
