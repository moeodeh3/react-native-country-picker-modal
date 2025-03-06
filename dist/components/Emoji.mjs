import { jsx } from 'react/jsx-runtime';
import { memo } from 'react';
import { Text } from 'react-native';
import * as nodeEmoji from 'node-emoji';

var Emoji = /*#__PURE__*/memo(function (_ref) {
  var name = _ref.name;
  var emoji = nodeEmoji.get(name);
  return jsx(Text, {
    allowFontScaling: false,
    children: emoji
  });
});

export { Emoji };
//# sourceMappingURL=Emoji.mjs.map
