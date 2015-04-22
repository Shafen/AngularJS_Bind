(function(angular) {
    'use strict';
    angular.module('invoice1', ['finance1'])
    .controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
        this.quantity = 1;
        this.cost = '';
        this.inCurr = 'USD';
        this.currencies = currencyConverter.currencies;
        
        this.total = function total(outCurr) {
            return currencyConverter.convert(this.quantity * this.cost, this.inCurr, outCurr);
        };
        
        this.pay = function pay() {
            window.alert("Thanks!");  
        };
    }]);
})(window.angular);