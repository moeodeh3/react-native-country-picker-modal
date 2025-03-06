import * as React from 'react';
import { getCountryInfoAsync, getLetters, search, getCountryCurrencyAsync, getCountryCallingCodeAsync, getCountriesAsync, getEmojiFlagAsync, getImageFlagAsync, getCountryNameAsync } from './CountryService.mjs';

var DEFAULT_COUNTRY_CONTEXT = {
  translation: 'common',
  getCountryNameAsync: getCountryNameAsync,
  getImageFlagAsync: getImageFlagAsync,
  getEmojiFlagAsync: getEmojiFlagAsync,
  getCountriesAsync: getCountriesAsync,
  getCountryCallingCodeAsync: getCountryCallingCodeAsync,
  getCountryCurrencyAsync: getCountryCurrencyAsync,
  search: search,
  getLetters: getLetters,
  getCountryInfoAsync: getCountryInfoAsync
};
var CountryContext = /*#__PURE__*/React.createContext(DEFAULT_COUNTRY_CONTEXT);
var useContext = function useContext() {
  return React.useContext(CountryContext);
};
CountryContext.Provider;
  CountryContext.Consumer;

export { CountryContext, DEFAULT_COUNTRY_CONTEXT, useContext };
//# sourceMappingURL=CountryContext.mjs.map
