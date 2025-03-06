import { CountryCode, Country, TranslationLanguageCode, FlagType, Region, Subregion } from './types';
type CountryMap = {
    [key in CountryCode]: Country;
};
export declare const loadDataAsync: (dataType?: FlagType) => Promise<CountryMap>;
export declare const getEmojiFlagAsync: (countryCode?: CountryCode) => Promise<string>;
export declare const getImageFlagAsync: (countryCode?: CountryCode) => Promise<string>;
export declare const getCountryNameAsync: (countryCode?: CountryCode, translation?: TranslationLanguageCode) => Promise<string>;
export declare const getCountryCallingCodeAsync: (countryCode: CountryCode) => Promise<string | undefined>;
export declare const getCountryCurrencyAsync: (countryCode: CountryCode) => Promise<string | undefined>;
export declare const getCountriesAsync: (flagType: FlagType, translation?: TranslationLanguageCode, region?: Region, subregion?: Subregion, countryCodes?: CountryCode[], excludeCountries?: CountryCode[], preferredCountries?: CountryCode[], withAlphaFilter?: boolean) => Promise<Country[]>;
export declare const search: (filter?: string, data?: Country[], options?: Fuse.FuseOptions<Country>) => Country[] | import("fuse.js").FuseResult<Country>[];
export declare const getLetters: (countries: Country[]) => string[];
export interface CountryInfo {
    countryName: string;
    currency: string;
    callingCode: string;
}
export declare const getCountryInfoAsync: ({ countryCode, translation, }: {
    countryCode: CountryCode;
    translation?: TranslationLanguageCode;
}) => Promise<CountryInfo>;
export {};
//# sourceMappingURL=CountryService.d.ts.map