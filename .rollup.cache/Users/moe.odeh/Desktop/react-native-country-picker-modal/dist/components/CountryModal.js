import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { AnimatedModal } from './AnimatedModal';
import { Modal } from './Modal';
import { useTheme } from './CountryTheme';
import { CountryModalContext } from './CountryModalProvider';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export const CountryModal = ({ children, withModal = true, disableNativeModal = false, animationType = 'slide', ...props }) => {
    const { backgroundColor } = useTheme();
    const { teleport } = React.useContext(CountryModalContext);
    const content = (_jsx(SafeAreaView, { style: [styles.container, { backgroundColor }], children: children }));
    React.useEffect(() => {
        if (disableNativeModal) {
            teleport(_jsx(AnimatedModal, { ...props, visible: true, children: content }));
        }
    }, [disableNativeModal]);
    if (withModal) {
        if (Platform.OS === 'web') {
            return _jsx(Modal, { ...props, animationType: animationType, children: content });
        }
        if (disableNativeModal) {
            return null;
        }
        return _jsx(Modal, { ...props, animationType: animationType, children: content });
    }
    return content;
};
//# sourceMappingURL=CountryModal.js.map