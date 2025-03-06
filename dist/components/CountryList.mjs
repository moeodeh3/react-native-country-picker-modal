import { slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect, memo } from 'react';
import { PixelRatio, StyleSheet, Dimensions, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from './CountryTheme.mjs';
import { Flag } from './Flag.mjs';
import { useContext } from './CountryContext.mjs';
import { CountryText } from './CountryText.mjs';

var borderBottomWidth = 2 / PixelRatio.get();
var styles = StyleSheet.create({
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
    borderBottomWidth: borderBottomWidth,
    width: '100%'
  }
});
var Letter = function Letter(_ref) {
  var letter = _ref.letter,
    scrollTo = _ref.scrollTo;
  var _useTheme = useTheme(),
    fontSize = _useTheme.fontSize,
    activeOpacity = _useTheme.activeOpacity;
  return jsx(TouchableOpacity, {
    testID: "letter-".concat(letter),
    onPress: function onPress() {
      return scrollTo(letter);
    },
    activeOpacity: activeOpacity,
    children: jsx(View, {
      style: styles.letter,
      children: jsx(CountryText, {
        style: [styles.letterText, {
          fontSize: fontSize * 0.8
        }],
        children: letter
      })
    })
  }, letter);
};
var CountryItem = function CountryItem(props) {
  var _useTheme2 = useTheme(),
    activeOpacity = _useTheme2.activeOpacity,
    itemHeight = _useTheme2.itemHeight,
    flagSize = _useTheme2.flagSize;
  var country = props.country,
    onSelect = props.onSelect,
    _props$withFlag = props.withFlag,
    withFlag = _props$withFlag === void 0 ? true : _props$withFlag,
    withEmoji = props.withEmoji,
    _props$withCallingCod = props.withCallingCode,
    withCallingCode = _props$withCallingCod === void 0 ? false : _props$withCallingCod,
    withCurrency = props.withCurrency;
  var extraContent = [];
  if (withCallingCode && country.callingCode && country.callingCode.length > 0) {
    extraContent.push("+".concat(country.callingCode.join('|')));
  }
  if (withCurrency && country.currency && country.currency.length > 0) {
    extraContent.push(country.currency.join('|'));
  }
  var countryName = typeof country.name === 'string' ? country.name : country.name.common;
  return jsx(TouchableOpacity, {
    testID: "country-selector-".concat(country.cca2),
    onPress: function onPress() {
      return onSelect(country);
    },
    activeOpacity: activeOpacity,
    children: jsxs(View, {
      style: [styles.itemCountry, {
        height: itemHeight
      }],
      children: [withFlag && jsx(Flag, {
        withEmoji: withEmoji !== null && withEmoji !== void 0 ? withEmoji : false,
        countryCode: country.cca2,
        flagSize: flagSize
      }), jsx(View, {
        style: styles.itemCountryName,
        children: jsxs(CountryText, {
          numberOfLines: 2,
          ellipsizeMode: 'tail',
          children: [countryName, extraContent.length > 0 && " (".concat(extraContent.join(', '), ")")]
        })
      })]
    })
  }, country.cca2);
};
var MemoCountryItem = /*#__PURE__*/memo(CountryItem);
var renderItem = function renderItem(props) {
  return function (_ref2) {
    var country = _ref2.item;
    return jsx(MemoCountryItem, _objectSpread2({
      country: country
    }, props));
  };
};
var ItemSeparatorComponent = function ItemSeparatorComponent() {
  var _useTheme3 = useTheme(),
    primaryColorVariant = _useTheme3.primaryColorVariant;
  return jsx(View, {
    style: [styles.sep, {
      borderBottomColor: primaryColorVariant
    }]
  });
};
var _Dimensions$get = Dimensions.get('window'),
  height = _Dimensions$get.height;
var CountryList = function CountryList(_ref3) {
  var data = _ref3.data,
    filterFocus = _ref3.filterFocus,
    withAlphaFilter = _ref3.withAlphaFilter,
    withEmoji = _ref3.withEmoji,
    withFlag = _ref3.withFlag,
    withCallingCode = _ref3.withCallingCode,
    withCurrency = _ref3.withCurrency,
    onSelect = _ref3.onSelect,
    filter = _ref3.filter,
    flatListProps = _ref3.flatListProps;
  var flatListRef = useRef(null);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    letter = _useState2[0],
    setLetter = _useState2[1];
  var _useTheme4 = useTheme(),
    itemHeight = _useTheme4.itemHeight,
    backgroundColor = _useTheme4.backgroundColor;
  var indexLetter = data.map(function (country) {
    return country.name.substr(0, 1);
  }).join('');
  var scrollTo = function scrollTo(letter) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var index = indexLetter.indexOf(letter);
    setLetter(letter);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: animated,
        index: index
      });
    }
  };
  var onScrollToIndexFailed = function onScrollToIndexFailed() {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
      scrollTo(letter);
    }
  };
  var _useContext = useContext(),
    search = _useContext.search,
    getLetters = _useContext.getLetters;
  var letters = getLetters(data);
  useEffect(function () {
    if (data && data.length > 0 && filterFocus && !filter) {
      scrollTo(letters[0], false);
    }
  }, [filterFocus]);
  var initialNumToRender = Math.round(height / (itemHeight || 1));
  return jsxs(View, {
    style: [styles.container, {
      backgroundColor: backgroundColor
    }],
    children: [jsx(FlatList, _objectSpread2({
      ref: flatListRef,
      testID: 'list-countries',
      keyboardShouldPersistTaps: 'handled',
      automaticallyAdjustContentInsets: false,
      scrollEventThrottle: 1,
      getItemLayout: function getItemLayout(_data, index) {
        return {
          length: itemHeight + borderBottomWidth,
          offset: (itemHeight + borderBottomWidth) * index,
          index: index
        };
      },
      renderItem: renderItem({
        withEmoji: withEmoji !== null && withEmoji !== void 0 ? withEmoji : false,
        withFlag: withFlag !== null && withFlag !== void 0 ? withFlag : true,
        withCallingCode: withCallingCode !== null && withCallingCode !== void 0 ? withCallingCode : false,
        withCurrency: withCurrency !== null && withCurrency !== void 0 ? withCurrency : false,
        onSelect: onSelect
      }),
      data: search(filter, data),
      keyExtractor: function keyExtractor(item) {
        return item === null || item === void 0 ? void 0 : item.cca2;
      },
      onScrollToIndexFailed: onScrollToIndexFailed,
      ItemSeparatorComponent: ItemSeparatorComponent,
      initialNumToRender: initialNumToRender
    }, flatListProps)), withAlphaFilter && jsx(ScrollView, {
      scrollEnabled: false,
      contentContainerStyle: styles.letters,
      keyboardShouldPersistTaps: 'always',
      children: letters.map(function (letter) {
        return jsx(Letter, {
          letter: letter,
          scrollTo: scrollTo
        }, letter);
      })
    })]
  });
};

export { CountryList };
//# sourceMappingURL=CountryList.mjs.map
