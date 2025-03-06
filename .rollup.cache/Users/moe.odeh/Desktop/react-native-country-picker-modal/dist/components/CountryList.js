import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, memo, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, PixelRatio, Dimensions, } from 'react-native';
import { useTheme } from './CountryTheme';
import { Flag } from './Flag';
import { useContext } from './CountryContext';
import { CountryText } from './CountryText';
const borderBottomWidth = 2 / PixelRatio.get();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    letters: {
        flex: 1,
        marginRight: 10,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    letter: {
        height: 23,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterText: {
        textAlign: 'center',
    },
    itemCountry: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    itemCountryName: {
        width: '90%',
    },
    list: {
        flex: 1,
    },
    sep: {
        borderBottomWidth,
        width: '100%',
    },
});
const Letter = ({ letter, scrollTo }) => {
    const { fontSize, activeOpacity } = useTheme();
    return (_jsx(TouchableOpacity, { testID: `letter-${letter}`, onPress: () => scrollTo(letter), activeOpacity, children: _jsx(View, { style: styles.letter, children: _jsx(CountryText, { style: [styles.letterText, { fontSize: fontSize * 0.8 }], children: letter }) }) }, letter));
};
const CountryItem = (props) => {
    const { activeOpacity, itemHeight, flagSize } = useTheme();
    const { country, onSelect, withFlag = true, withEmoji, withCallingCode = false, withCurrency, } = props;
    const extraContent = [];
    if (withCallingCode &&
        country.callingCode &&
        country.callingCode.length > 0) {
        extraContent.push(`+${country.callingCode.join('|')}`);
    }
    if (withCurrency && country.currency && country.currency.length > 0) {
        extraContent.push(country.currency.join('|'));
    }
    const countryName = typeof country.name === 'string' ? country.name : country.name.common;
    return (_jsx(TouchableOpacity, { testID: `country-selector-${country.cca2}`, onPress: () => onSelect(country), activeOpacity, children: _jsxs(View, { style: [styles.itemCountry, { height: itemHeight }], children: [withFlag && (_jsx(Flag, { withEmoji: withEmoji ?? false, countryCode: country.cca2, flagSize: flagSize })), _jsx(View, { style: styles.itemCountryName, children: _jsxs(CountryText, { numberOfLines: 2, ellipsizeMode: 'tail', children: [countryName, extraContent.length > 0 && ` (${extraContent.join(', ')})`] }) })] }) }, country.cca2));
};
const MemoCountryItem = memo(CountryItem);
const renderItem = (props) => ({ item: country }) => (_jsx(MemoCountryItem, { country, ...props }));
const ItemSeparatorComponent = () => {
    const { primaryColorVariant } = useTheme();
    return (_jsx(View, { style: [styles.sep, { borderBottomColor: primaryColorVariant }] }));
};
const { height } = Dimensions.get('window');
export const CountryList = ({ data, filterFocus, withAlphaFilter, withEmoji, withFlag, withCallingCode, withCurrency, onSelect, filter, flatListProps, }) => {
    const flatListRef = useRef(null);
    const [letter, setLetter] = useState('');
    const { itemHeight, backgroundColor } = useTheme();
    const indexLetter = data
        .map((country) => country.name.substr(0, 1))
        .join('');
    const scrollTo = (letter, animated = true) => {
        const index = indexLetter.indexOf(letter);
        setLetter(letter);
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated, index });
        }
    };
    const onScrollToIndexFailed = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd();
            scrollTo(letter);
        }
    };
    const { search, getLetters } = useContext();
    const letters = getLetters(data);
    useEffect(() => {
        if (data && data.length > 0 && filterFocus && !filter) {
            scrollTo(letters[0], false);
        }
    }, [filterFocus]);
    const initialNumToRender = Math.round(height / (itemHeight || 1));
    return (_jsxs(View, { style: [styles.container, { backgroundColor }], children: [_jsx(FlatList, { ref: flatListRef, testID: 'list-countries', keyboardShouldPersistTaps: 'handled', automaticallyAdjustContentInsets: false, scrollEventThrottle: 1, getItemLayout: (_data, index) => ({
                    length: itemHeight + borderBottomWidth,
                    offset: (itemHeight + borderBottomWidth) * index,
                    index,
                }), renderItem: renderItem({
                    withEmoji: withEmoji ?? false,
                    withFlag: withFlag ?? true,
                    withCallingCode: withCallingCode ?? false,
                    withCurrency: withCurrency ?? false,
                    onSelect,
                }), data: search(filter, data),
                keyExtractor: (item) => item?.cca2,
                onScrollToIndexFailed,
                ItemSeparatorComponent,
                initialNumToRender, ...flatListProps }), withAlphaFilter && (_jsx(ScrollView, { scrollEnabled: false, contentContainerStyle: styles.letters, keyboardShouldPersistTaps: 'always', children: letters.map((letter) => (_jsx(Letter, { letter, scrollTo }, letter))) }))] }));
};
//# sourceMappingURL=CountryList.js.map