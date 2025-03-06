import { asyncToGenerator as _asyncToGenerator, regeneratorRuntime as _regeneratorRuntime, objectSpread2 as _objectSpread2, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { CountryCodeList, FlagType } from './types.mjs';
import Fuse from 'fuse.js';

var imageJsonUrl = 'https://xcarpentier.github.io/react-native-country-picker-modal/countries/';
var localData = {
  emojiCountries: undefined,
  imageCountries: undefined
};
var loadDataAsync = function (data) {
  return function () {
    var dataType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FlagType.EMOJI;
    return new Promise(function (resolve, reject) {
      switch (dataType) {
        case FlagType.FLAT:
          if (!data.imageCountries) {
            fetch(imageJsonUrl).then(function (response) {
              return response.json();
            }).then(function (remoteData) {
              data.imageCountries = remoteData;
              resolve(data.imageCountries);
            })["catch"](reject);
          } else {
            resolve(data.imageCountries);
          }
          break;
        default:
          if (!data.emojiCountries) {
            data.emojiCountries = require('./assets/data/countries-emoji.json');
            resolve(data.emojiCountries);
          } else {
            resolve(data.emojiCountries);
          }
          break;
      }
    });
  };
}(localData);
var getEmojiFlagAsync = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var countryCode,
      countries,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          countryCode = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'FR';
          _context.next = 3;
          return loadDataAsync();
        case 3:
          countries = _context.sent;
          if (countries) {
            _context.next = 6;
            break;
          }
          throw new Error('Unable to find emoji because emojiCountries is undefined');
        case 6:
          return _context.abrupt("return", countries[countryCode].flag);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getEmojiFlagAsync() {
    return _ref.apply(this, arguments);
  };
}();
var getImageFlagAsync = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var countryCode,
      countries,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          countryCode = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'FR';
          _context2.next = 3;
          return loadDataAsync(FlagType.FLAT);
        case 3:
          countries = _context2.sent;
          if (countries) {
            _context2.next = 6;
            break;
          }
          throw new Error('Unable to find image because imageCountries is undefined');
        case 6:
          return _context2.abrupt("return", countries[countryCode].flag);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getImageFlagAsync() {
    return _ref2.apply(this, arguments);
  };
}();
var getCountryNameAsync = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var countryCode,
      translation,
      countries,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          countryCode = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'FR';
          translation = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'common';
          _context3.next = 4;
          return loadDataAsync();
        case 4:
          countries = _context3.sent;
          if (countries) {
            _context3.next = 7;
            break;
          }
          throw new Error('Unable to find image because imageCountries is undefined');
        case 7:
          return _context3.abrupt("return", countries[countryCode].name ? countries[countryCode].name[translation] : countries[countryCode].name['common']);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getCountryNameAsync() {
    return _ref3.apply(this, arguments);
  };
}();
var getCountryCallingCodeAsync = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(countryCode) {
    var countries;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return loadDataAsync();
        case 2:
          countries = _context4.sent;
          if (countries) {
            _context4.next = 5;
            break;
          }
          throw new Error('Unable to find image because imageCountries is undefined');
        case 5:
          return _context4.abrupt("return", countries[countryCode].callingCode[0]);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getCountryCallingCodeAsync(_x) {
    return _ref4.apply(this, arguments);
  };
}();
var getCountryCurrencyAsync = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(countryCode) {
    var countries;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return loadDataAsync();
        case 2:
          countries = _context5.sent;
          if (countries) {
            _context5.next = 5;
            break;
          }
          throw new Error('Unable to find image because imageCountries is undefined');
        case 5:
          return _context5.abrupt("return", countries[countryCode].currency[0]);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getCountryCurrencyAsync(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
var isCountryPresent = function isCountryPresent(countries) {
  return function (countryCode) {
    return !!countries[countryCode];
  };
};
var isRegion = function isRegion(region) {
  return function (country) {
    return region ? country.region === region : true;
  };
};
var isSubregion = function isSubregion(subregion) {
  return function (country) {
    return subregion ? country.subregion === subregion : true;
  };
};
var isIncluded = function isIncluded(countryCodes) {
  return function (country) {
    return countryCodes && countryCodes.length > 0 ? countryCodes.includes(country.cca2) : true;
  };
};
var isExcluded = function isExcluded(excludeCountries) {
  return function (country) {
    return excludeCountries && excludeCountries.length > 0 ? !excludeCountries.includes(country.cca2) : true;
  };
};
var getCountriesAsync = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(flagType) {
    var translation,
      region,
      subregion,
      countryCodes,
      excludeCountries,
      preferredCountries,
      withAlphaFilter,
      countriesRaw,
      newCountryCodeList,
      countries,
      _countries,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          translation = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'common';
          region = _args6.length > 2 ? _args6[2] : undefined;
          subregion = _args6.length > 3 ? _args6[3] : undefined;
          countryCodes = _args6.length > 4 ? _args6[4] : undefined;
          excludeCountries = _args6.length > 5 ? _args6[5] : undefined;
          preferredCountries = _args6.length > 6 ? _args6[6] : undefined;
          withAlphaFilter = _args6.length > 7 ? _args6[7] : undefined;
          _context6.next = 9;
          return loadDataAsync(flagType);
        case 9:
          countriesRaw = _context6.sent;
          if (countriesRaw) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", []);
        case 12:
          if (!(preferredCountries && !withAlphaFilter)) {
            _context6.next = 18;
            break;
          }
          newCountryCodeList = [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(CountryCodeList.filter(function (code) {
            return !preferredCountries.includes(code);
          })));
          countries = newCountryCodeList.filter(isCountryPresent(countriesRaw)).map(function (cca2) {
            return _objectSpread2(_objectSpread2({}, _objectSpread2(_objectSpread2({}, countriesRaw[cca2]), {}, {
              name: countriesRaw[cca2].name[translation] || countriesRaw[cca2].name['common']
            })), {}, {
              cca2: cca2
            });
          }).filter(isRegion(region)).filter(isSubregion(subregion)).filter(isIncluded(countryCodes)).filter(isExcluded(excludeCountries));
          return _context6.abrupt("return", countries);
        case 18:
          _countries = CountryCodeList.filter(isCountryPresent(countriesRaw)).map(function (cca2) {
            return _objectSpread2(_objectSpread2({}, _objectSpread2(_objectSpread2({}, countriesRaw[cca2]), {}, {
              name: countriesRaw[cca2].name[translation] || countriesRaw[cca2].name['common']
            })), {}, {
              cca2: cca2
            });
          }).filter(isRegion(region)).filter(isSubregion(subregion)).filter(isIncluded(countryCodes)).filter(isExcluded(excludeCountries)).sort(function (country1, country2) {
            return country1.name.localeCompare(country2.name);
          });
          return _context6.abrupt("return", _countries);
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getCountriesAsync(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
var DEFAULT_FUSE_OPTION = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'cca2', 'callingCode']
};
var fuse;
var search = function search() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_FUSE_OPTION;
  if (data.length === 0) {
    return [];
  }
  if (!fuse) {
    fuse = new Fuse(data, options);
  }
  if (filter && filter !== '') {
    var result = fuse.search(filter);
    return result;
  } else {
    return data;
  }
};
var uniq = function uniq(arr) {
  return Array.from(new Set(arr));
};
var getLetters = function getLetters(countries) {
  return uniq(countries.map(function (country) {
    return country.name.substr(0, 1).toLocaleUpperCase();
  }).sort(function (l1, l2) {
    return l1.localeCompare(l2);
  }));
};
var getCountryInfoAsync = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref7) {
    var countryCode, translation, countryName, currency, callingCode;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          countryCode = _ref7.countryCode, translation = _ref7.translation;
          _context7.next = 3;
          return getCountryNameAsync(countryCode, translation || 'common');
        case 3:
          countryName = _context7.sent;
          _context7.next = 6;
          return getCountryCurrencyAsync(countryCode);
        case 6:
          currency = _context7.sent;
          _context7.next = 9;
          return getCountryCallingCodeAsync(countryCode);
        case 9:
          callingCode = _context7.sent;
          return _context7.abrupt("return", {
            countryName: countryName,
            currency: currency,
            callingCode: callingCode
          });
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getCountryInfoAsync(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

export { getCountriesAsync, getCountryCallingCodeAsync, getCountryCurrencyAsync, getCountryInfoAsync, getCountryNameAsync, getEmojiFlagAsync, getImageFlagAsync, getLetters, loadDataAsync, search };
//# sourceMappingURL=CountryService.mjs.map
