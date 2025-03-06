import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Text } from 'react-native';
import * as nodeEmoji from 'node-emoji';
const Emoji = memo(({ name }) => {
    const emoji = nodeEmoji.get(name);
    return _jsx(Text, { allowFontScaling: false, children: emoji });
});
export { Emoji };
//# sourceMappingURL=Emoji.js.map