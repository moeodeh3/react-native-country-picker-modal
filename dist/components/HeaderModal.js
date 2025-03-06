'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var CloseButton = require('./CloseButton.js');

const styles = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
const HeaderModal = ({
  withFilter = false,
  withCloseButton = true,
  closeButtonImage,
  closeButtonStyle,
  closeButtonImageStyle,
  onClose,
  renderFilter
}) => {
  return jsxRuntime.jsxs(reactNative.View, {
    style: styles.container,
    children: [withCloseButton && jsxRuntime.jsx(CloseButton, {
      image: closeButtonImage,
      style: closeButtonStyle,
      imageStyle: closeButtonImageStyle,
      onPress: () => onClose()
    }), withFilter && renderFilter({
      withFilter,
      withCloseButton,
      closeButtonImage,
      closeButtonStyle,
      closeButtonImageStyle,
      onClose,
      renderFilter
    })]
  });
};

exports.HeaderModal = HeaderModal;
//# sourceMappingURL=HeaderModal.js.map
