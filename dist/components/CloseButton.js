'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var CountryTheme = require('./CountryTheme.js');

const styles = reactNative.StyleSheet.create({
  container: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
});
const CloseButtonAndroid = props => {
  let closeImage = require('./assets/images/close.android.png');
  if (props.image) {
    closeImage = props.image;
  }
  const {
    onBackgroundTextColor
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.View, {
    style: [styles.container, props.style],
    children: jsxRuntime.jsx(reactNative.TouchableNativeFeedback, {
      background: typeof reactNative.Platform.Version === 'number' && reactNative.Platform.Version < 21 ? reactNative.TouchableNativeFeedback.SelectableBackground() : reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless(),
      onPress: props.onPress,
      children: jsxRuntime.jsx(reactNative.View, {
        children: jsxRuntime.jsx(reactNative.Image, {
          source: closeImage,
          style: [styles.imageStyle, props.imageStyle, {
            tintColor: onBackgroundTextColor
          }]
        })
      })
    })
  });
};
const CloseButtonIOS = props => {
  let closeImage = require('./assets/images/close.ios.png');
  if (props.image) {
    closeImage = props.image;
  }
  const {
    onBackgroundTextColor
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.View, {
    style: [styles.container, props.style],
    children: jsxRuntime.jsx(reactNative.TouchableOpacity, {
      onPress: props.onPress,
      children: jsxRuntime.jsx(reactNative.Image, {
        source: closeImage,
        style: [styles.imageStyle, props.imageStyle, {
          tintColor: onBackgroundTextColor
        }]
      })
    })
  });
};
var CloseButton = reactNative.Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS,
  default: CloseButtonIOS
});

module.exports = CloseButton;
//# sourceMappingURL=CloseButton.js.map
