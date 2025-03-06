import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');
const duration = 300;
const useNativeDriver = true;
export const AnimatedModal = ({ children, visible = false }) => {
    const translateY = React.useRef(new Animated.Value(height)).current;
    const showModal = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration,
            useNativeDriver,
        }).start();
    };
    const hideModal = () => {
        Animated.timing(translateY, {
            toValue: height,
            duration,
            useNativeDriver,
        }).start();
    };
    React.useEffect(() => {
        if (visible) {
            showModal();
        }
        else {
            hideModal();
        }
    }, [visible]);
    return (_jsx(Animated.View, { style: {
            ...StyleSheet.absoluteFillObject,
            transform: [{ translateY }],
            zIndex: 99,
        }, children: children }));
};
//# sourceMappingURL=AnimatedModal.js.map