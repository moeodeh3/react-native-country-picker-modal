'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');
var CountryTheme = require('./CountryTheme.js');
var Flag = require('./Flag.js');
var CountryContext = require('./CountryContext.js');
var CountryText = require('./CountryText.js');

const borderBottomWidth = 2 / reactNative.PixelRatio.get();
const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  letters: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  letter: {
    height: 23,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center'
  },
  itemCountry: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  itemCountryName: {
    width: '90%'
  },
  list: {
    flex: 1
  },
  sep: {
    borderBottomWidth,
    width: '100%'
  }
});
const Letter = ({
  letter,
  scrollTo
}) => {
  const {
    fontSize,
    activeOpacity
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.TouchableOpacity, {
    testID: `letter-${letter}`,
    onPress: () => scrollTo(letter),
    activeOpacity,
    children: jsxRuntime.jsx(reactNative.View, {
      style: styles.letter,
      children: jsxRuntime.jsx(CountryText.CountryText, {
        style: [styles.letterText, {
          fontSize: fontSize * 0.8
        }],
        children: letter
      })
    })
  }, letter);
};
const CountryItem = props => {
  const {
    activeOpacity,
    itemHeight,
    flagSize
  } = CountryTheme.useTheme();
  const {
    country,
    onSelect,
    withFlag = true,
    withEmoji,
    withCallingCode = false,
    withCurrency
  } = props;
  const extraContent = [];
  if (withCallingCode && country.callingCode && country.callingCode.length > 0) {
    extraContent.push(`+${country.callingCode.join('|')}`);
  }
  if (withCurrency && country.currency && country.currency.length > 0) {
    extraContent.push(country.currency.join('|'));
  }
  const countryName = typeof country.name === 'string' ? country.name : country.name.common;
  return jsxRuntime.jsx(reactNative.TouchableOpacity, {
    testID: `country-selector-${country.cca2}`,
    onPress: () => onSelect(country),
    activeOpacity,
    children: jsxRuntime.jsxs(reactNative.View, {
      style: [styles.itemCountry, {
        height: itemHeight
      }],
      children: [withFlag && jsxRuntime.jsx(Flag.Flag, {
        withEmoji: withEmoji ?? false,
        countryCode: country.cca2,
        flagSize: flagSize
      }), jsxRuntime.jsx(reactNative.View, {
        style: styles.itemCountryName,
        children: jsxRuntime.jsxs(CountryText.CountryText, {
          numberOfLines: 2,
          ellipsizeMode: 'tail',
          children: [countryName, extraContent.length > 0 && ` (${extraContent.join(', ')})`]
        })
      })]
    })
  }, country.cca2);
};
const MemoCountryItem = /*#__PURE__*/React.memo(CountryItem);
const renderItem = props => ({
  item: country
}) => jsxRuntime.jsx(MemoCountryItem, {
  country,
  ...props
});
const ItemSeparatorComponent = () => {
  const {
    primaryColorVariant
  } = CountryTheme.useTheme();
  return jsxRuntime.jsx(reactNative.View, {
    style: [styles.sep, {
      borderBottomColor: primaryColorVariant
    }]
  });
};
const {
  height
} = reactNative.Dimensions.get('window');
const CountryList = ({
  data,
  filterFocus,
  withAlphaFilter,
  withEmoji,
  withFlag,
  withCallingCode,
  withCurrency,
  onSelect,
  filter,
  flatListProps
}) => {
  const flatListRef = React.useRef(null);
  const [letter, setLetter] = React.useState('');
  const {
    itemHeight,
    backgroundColor
  } = CountryTheme.useTheme();
  const indexLetter = data.map(country => country.name.substr(0, 1)).join('');
  const scrollTo = (letter, animated = true) => {
    const index = indexLetter.indexOf(letter);
    setLetter(letter);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated,
        index
      });
    }
  };
  const onScrollToIndexFailed = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
      scrollTo(letter);
    }
  };
  const {
    search,
    getLetters
  } = CountryContext.useContext();
  const letters = getLetters(data);
  React.useEffect(() => {
    if (data && data.length > 0 && filterFocus && !filter) {
      scrollTo(letters[0], false);
    }
  }, [filterFocus]);
  const initialNumToRender = Math.round(height / (itemHeight || 1));
  return jsxRuntime.jsxs(reactNative.View, {
    style: [styles.container, {
      backgroundColor
    }],
    children: [jsxRuntime.jsx(reactNative.FlatList, {
      ref: flatListRef,
      testID: 'list-countries',
      keyboardShouldPersistTaps: 'handled',
      automaticallyAdjustContentInsets: false,
      scrollEventThrottle: 1,
      getItemLayout: (_data, index) => ({
        length: itemHeight + borderBottomWidth,
        offset: (itemHeight + borderBottomWidth) * index,
        index
      }),
      renderItem: renderItem({
        withEmoji: withEmoji ?? false,
        withFlag: withFlag ?? true,
        withCallingCode: withCallingCode ?? false,
        withCurrency: withCurrency ?? false,
        onSelect
      }),
      data: search(filter, data),
      keyExtractor: item => item?.cca2,
      onScrollToIndexFailed,
      ItemSeparatorComponent,
      initialNumToRender,
      ...flatListProps
    }), withAlphaFilter && jsxRuntime.jsx(reactNative.ScrollView, {
      scrollEnabled: false,
      contentContainerStyle: styles.letters,
      keyboardShouldPersistTaps: 'always',
      children: letters.map(letter => jsxRuntime.jsx(Letter, {
        letter,
        scrollTo
      }, letter))
    })]
  });
};

exports.CountryList = CountryList;
//# sourceMappingURL=CountryList.js.map
