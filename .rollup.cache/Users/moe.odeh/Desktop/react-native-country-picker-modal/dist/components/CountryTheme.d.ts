export declare const DEFAULT_THEME: {
    primaryColor: string;
    primaryColorVariant: string;
    backgroundColor: string;
    onBackgroundTextColor: string;
    fontSize: number;
    fontFamily: string | undefined;
    filterPlaceholderTextColor: string;
    activeOpacity: number;
    itemHeight: number;
    flagSize: number;
    flagSizeButton: number;
};
export declare const DARK_THEME: {
    primaryColor: string;
    primaryColorVariant: string;
    backgroundColor: string;
    onBackgroundTextColor: string;
    fontSize: number;
    fontFamily: string | undefined;
    filterPlaceholderTextColor: string;
    activeOpacity: number;
    itemHeight: number;
    flagSize: number;
    flagSizeButton: number;
};
export type Theme = Partial<typeof DEFAULT_THEME>;
declare const ThemeProvider: import("react").ComponentType<{
    children: React.ReactNode;
    theme?: Partial<{
        primaryColor: string;
        primaryColorVariant: string;
        backgroundColor: string;
        onBackgroundTextColor: string;
        fontSize: number;
        fontFamily: string | undefined;
        filterPlaceholderTextColor: string;
        activeOpacity: number;
        itemHeight: number;
        flagSize: number;
        flagSizeButton: number;
    }>;
}>, useTheme: <T = Partial<{
    primaryColor: string;
    primaryColorVariant: string;
    backgroundColor: string;
    onBackgroundTextColor: string;
    fontSize: number;
    fontFamily: string | undefined;
    filterPlaceholderTextColor: string;
    activeOpacity: number;
    itemHeight: number;
    flagSize: number;
    flagSizeButton: number;
}>>(overrides?: import("@callstack/react-theme-provider").$DeepPartial<T> | undefined) => T;
export { ThemeProvider, useTheme };
//# sourceMappingURL=CountryTheme.d.ts.map