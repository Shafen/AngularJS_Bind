(function(angular) {
    'use strict';
    angular.module('finance1', [])
        .factory('currencyConverter', function() {
            var currencies = ['USD', 'EUR', 'CNY'];
            var usdToForeignRates = {
                USD: 1,
                EUR: 1.07,
                CNY:0.16
            };
            var convert = function(amount, inCurr, outCurr) {
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];  
            };
    
            return {
                currencies: currencies,
                convert: convert
            };
    });
})(window.angular);