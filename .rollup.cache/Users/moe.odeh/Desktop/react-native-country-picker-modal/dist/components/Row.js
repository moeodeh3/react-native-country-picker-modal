import { jsx as _jsx } from "react/jsx-runtime";
import { StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
export const Row = (props) => (_jsx(View, { ...props, style: [
        styles.row,
        props.style,
        props.fullWidth && {
            width: '100%',
            justifyContent: 'space-between',
            padding: 10,
            paddingHorizontal: 50
        }
    ] }));
//# sourceMappingURL=Row.js.map