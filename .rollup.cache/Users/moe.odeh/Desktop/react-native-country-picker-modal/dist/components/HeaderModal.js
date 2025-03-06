import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, StyleSheet, } from 'react-native';
import CloseButton from './CloseButton';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export const HeaderModal = ({ withFilter = false, withCloseButton = true, closeButtonImage, closeButtonStyle, closeButtonImageStyle, onClose, renderFilter, }) => {
    return (_jsxs(View, { style: styles.container, children: [withCloseButton && (_jsx(CloseButton, { image: closeButtonImage, style: closeButtonStyle, imageStyle: closeButtonImageStyle, onPress: () => onClose() })), withFilter && renderFilter({ withFilter, withCloseButton, closeButtonImage, closeButtonStyle, closeButtonImageStyle, onClose, renderFilter })] }));
};
//# sourceMappingURL=HeaderModal.js.map