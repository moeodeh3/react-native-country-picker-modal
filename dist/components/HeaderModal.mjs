import { jsxs, jsx } from 'react/jsx-runtime';
import { StyleSheet, View } from 'react-native';
import CloseButton from './CloseButton.mjs';

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
var HeaderModal = function HeaderModal(_ref) {
  var _ref$withFilter = _ref.withFilter,
    withFilter = _ref$withFilter === void 0 ? false : _ref$withFilter,
    _ref$withCloseButton = _ref.withCloseButton,
    withCloseButton = _ref$withCloseButton === void 0 ? true : _ref$withCloseButton,
    closeButtonImage = _ref.closeButtonImage,
    closeButtonStyle = _ref.closeButtonStyle,
    closeButtonImageStyle = _ref.closeButtonImageStyle,
    onClose = _ref.onClose,
    renderFilter = _ref.renderFilter;
  return jsxs(View, {
    style: styles.container,
    children: [withCloseButton && jsx(CloseButton, {
      image: closeButtonImage,
      style: closeButtonStyle,
      imageStyle: closeButtonImageStyle,
      onPress: function onPress() {
        return onClose();
      }
    }), withFilter && renderFilter({
      withFilter: withFilter,
      withCloseButton: withCloseButton,
      closeButtonImage: closeButtonImage,
      closeButtonStyle: closeButtonStyle,
      closeButtonImageStyle: closeButtonImageStyle,
      onClose: onClose,
      renderFilter: renderFilter
    })]
  });
};

export { HeaderModal };
//# sourceMappingURL=HeaderModal.mjs.map
