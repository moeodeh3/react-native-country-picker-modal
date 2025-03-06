import { jsx } from 'react/jsx-runtime';
import { StyleSheet, Platform, View, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import { useTheme } from './CountryTheme.mjs';

var styles = StyleSheet.create({
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
var CloseButtonAndroid = function CloseButtonAndroid(props) {
  var closeImage = require('../assets/images/close.android.png');
  if (props.image) {
    closeImage = props.image;
  }
  var _useTheme = useTheme(),
    onBackgroundTextColor = _useTheme.onBackgroundTextColor;
  return jsx(View, {
    style: [styles.container, props.style],
    children: jsx(TouchableNativeFeedback, {
      background: typeof Platform.Version === 'number' && Platform.Version < 21 ? TouchableNativeFeedback.SelectableBackground() : TouchableNativeFeedback.SelectableBackgroundBorderless(),
      onPress: props.onPress,
      children: jsx(View, {
        children: jsx(Image, {
          source: closeImage,
          style: [styles.imageStyle, props.imageStyle, {
            tintColor: onBackgroundTextColor
          }]
        })
      })
    })
  });
};
var CloseButtonIOS = function CloseButtonIOS(props) {
  var closeImage = require('../assets/images/close.ios.png');
  if (props.image) {
    closeImage = props.image;
  }
  var _useTheme2 = useTheme(),
    onBackgroundTextColor = _useTheme2.onBackgroundTextColor;
  return jsx(View, {
    style: [styles.container, props.style],
    children: jsx(TouchableOpacity, {
      onPress: props.onPress,
      children: jsx(Image, {
        source: closeImage,
        style: [styles.imageStyle, props.imageStyle, {
          tintColor: onBackgroundTextColor
        }]
      })
    })
  });
};
var CloseButton = Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS,
  "default": CloseButtonIOS
});

export { CloseButton as default };
//# sourceMappingURL=CloseButton.mjs.map
