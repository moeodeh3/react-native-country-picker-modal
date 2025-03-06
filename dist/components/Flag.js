'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Emoji = require('./Emoji.js');
var CountryContext = require('./CountryContext.js');
var reactAsyncHook = require('react-async-hook');
var reactNative = require('react-native');

const styles = reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    marginRight: 10
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 / reactNative.PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  imageFlag: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / reactNative.PixelRatio.get(),
    opacity: 0.8
  }
});
const ImageFlag = /*#__PURE__*/React.memo(({
  countryCode,
  flagSize
}) => {
  const {
    getImageFlagAsync
  } = CountryContext.useContext();
  const asyncResult = reactAsyncHook.useAsync(getImageFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return jsxRuntime.jsx(reactNative.ActivityIndicator, {
      size: 'small'
    });
  }
  return jsxRuntime.jsx(reactNative.Image, {
    resizeMode: 'contain',
    style: [styles.imageFlag, {
      borderColor: 'transparent',
      height: flagSize
    }],
    source: {
      uri: asyncResult.result
    }
  });
});
const EmojiFlag = /*#__PURE__*/React.memo(({
  countryCode,
  flagSize
}) => {
  const {
    getEmojiFlagAsync
  } = CountryContext.useContext();
  const asyncResult = reactAsyncHook.useAsync(getEmojiFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return jsxRuntime.jsx(reactNative.ActivityIndicator, {
      size: 'small'
    });
  }
  return jsxRuntime.jsx(reactNative.Text, {
    style: [styles.emojiFlag, {
      fontSize: flagSize
    }],
    allowFontScaling: false,
    children: jsxRuntime.jsx(Emoji.Emoji, {
      name: asyncResult.result
    })
  });
});
const Flag = ({
  countryCode,
  withEmoji = true,
  withFlagButton = true,
  flagSize
}) => withFlagButton ? jsxRuntime.jsx(reactNative.View, {
  style: styles.container,
  children: withEmoji ? jsxRuntime.jsx(EmojiFlag, {
    countryCode,
    flagSize
  }) : jsxRuntime.jsx(ImageFlag, {
    countryCode,
    flagSize
  })
}) : null;

exports.Flag = Flag;
//# sourceMappingURL=Flag.js.map
