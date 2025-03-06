import { FlatListProps } from 'react-native';
import { Country } from './types';
interface CountryListProps {
    data: Country[];
    filter?: string;
    filterFocus?: boolean;
    withFlag?: boolean;
    withEmoji?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    flatListProps?: FlatListProps<Country>;
    onSelect(country: Country): void;
}
export declare const CountryList: ({ data, filterFocus, withAlphaFilter, withEmoji, withFlag, withCallingCode, withCurrency, onSelect, filter, flatListProps, }: CountryListProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CountryList.d.ts.map