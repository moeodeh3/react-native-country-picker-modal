'use strict';

var React = require('react');
var CountryService = require('./CountryService.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const DEFAULT_COUNTRY_CONTEXT = {
  translation: 'common',
  getCountryNameAsync: CountryService.getCountryNameAsync,
  getImageFlagAsync: CountryService.getImageFlagAsync,
  getEmojiFlagAsync: CountryService.getEmojiFlagAsync,
  getCountriesAsync: CountryService.getCountriesAsync,
  getCountryCallingCodeAsync: CountryService.getCountryCallingCodeAsync,
  getCountryCurrencyAsync: CountryService.getCountryCurrencyAsync,
  search: CountryService.search,
  getLetters: CountryService.getLetters,
  getCountryInfoAsync: CountryService.getCountryInfoAsync
};
const CountryContext = /*#__PURE__*/React__namespace.createContext(DEFAULT_COUNTRY_CONTEXT);
const useContext = () => React__namespace.useContext(CountryContext);
const {
  Provider: CountryProvider,
  Consumer: CountryConsumer
} = CountryContext;

exports.CountryConsumer = CountryConsumer;
exports.CountryContext = CountryContext;
exports.CountryProvider = CountryProvider;
exports.DEFAULT_COUNTRY_CONTEXT = DEFAULT_COUNTRY_CONTEXT;
exports.useContext = useContext;
//# sourceMappingURL=CountryContext.js.map
