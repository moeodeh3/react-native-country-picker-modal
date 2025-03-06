import { jsx as _jsx } from "react/jsx-runtime";
import { Image, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, } from 'react-native';
import { useTheme } from './CountryTheme';
const styles = StyleSheet.create({
    container: {
        height: 48,
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
});
const CloseButtonAndroid = (props) => {
    let closeImage = require('./assets/images/close.android.png');
    if (props.image) {
        closeImage = props.image;
    }
    const { onBackgroundTextColor } = useTheme();
    return (_jsx(View, { style: [styles.container, props.style], children: _jsx(TouchableNativeFeedback, { background: typeof Platform.Version === 'number' && Platform.Version < 21
                ? TouchableNativeFeedback.SelectableBackground()
                : TouchableNativeFeedback.SelectableBackgroundBorderless(), onPress: props.onPress, children: _jsx(View, { children: _jsx(Image, { source: closeImage, style: [
                        styles.imageStyle,
                        props.imageStyle,
                        { tintColor: onBackgroundTextColor },
                    ] }) }) }) }));
};
const CloseButtonIOS = (props) => {
    let closeImage = require('./assets/images/close.ios.png');
    if (props.image) {
        closeImage = props.image;
    }
    const { onBackgroundTextColor } = useTheme();
    return (_jsx(View, { style: [styles.container, props.style], children: _jsx(TouchableOpacity, { onPress: props.onPress, children: _jsx(Image, { source: closeImage, style: [
                    styles.imageStyle,
                    props.imageStyle,
                    { tintColor: onBackgroundTextColor },
                ] }) }) }));
};
export default Platform.select({
    ios: CloseButtonIOS,
    android: CloseButtonAndroid,
    web: CloseButtonIOS,
    default: CloseButtonIOS,
});
//# sourceMappingURL=CloseButton.js.map