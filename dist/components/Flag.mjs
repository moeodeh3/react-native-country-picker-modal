import { jsx } from 'react/jsx-runtime';
import { memo } from 'react';
import { Emoji } from './Emoji.mjs';
import { useContext } from './CountryContext.mjs';
import { useAsync } from 'react-async-hook';
import { StyleSheet, PixelRatio, View, ActivityIndicator, Text, Image } from 'react-native';

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    marginRight: 10
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  imageFlag: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    opacity: 0.8
  }
});
var ImageFlag = /*#__PURE__*/memo(function (_ref) {
  var countryCode = _ref.countryCode,
    flagSize = _ref.flagSize;
  var _useContext = useContext(),
    getImageFlagAsync = _useContext.getImageFlagAsync;
  var asyncResult = useAsync(getImageFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return jsx(ActivityIndicator, {
      size: 'small'
    });
  }
  return jsx(Image, {
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
var EmojiFlag = /*#__PURE__*/memo(function (_ref2) {
  var countryCode = _ref2.countryCode,
    flagSize = _ref2.flagSize;
  var _useContext2 = useContext(),
    getEmojiFlagAsync = _useContext2.getEmojiFlagAsync;
  var asyncResult = useAsync(getEmojiFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return jsx(ActivityIndicator, {
      size: 'small'
    });
  }
  return jsx(Text, {
    style: [styles.emojiFlag, {
      fontSize: flagSize
    }],
    allowFontScaling: false,
    children: jsx(Emoji, {
      name: asyncResult.result
    })
  });
});
var Flag = function Flag(_ref3) {
  var countryCode = _ref3.countryCode,
    _ref3$withEmoji = _ref3.withEmoji,
    withEmoji = _ref3$withEmoji === void 0 ? true : _ref3$withEmoji,
    _ref3$withFlagButton = _ref3.withFlagButton,
    withFlagButton = _ref3$withFlagButton === void 0 ? true : _ref3$withFlagButton,
    flagSize = _ref3.flagSize;
  return withFlagButton ? jsx(View, {
    style: styles.container,
    children: withEmoji ? jsx(EmojiFlag, {
      countryCode: countryCode,
      flagSize: flagSize
    }) : jsx(ImageFlag, {
      countryCode: countryCode,
      flagSize: flagSize
    })
  }) : null;
};

export { Flag };
//# sourceMappingURL=Flag.mjs.map
