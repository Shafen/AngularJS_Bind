(function(angular) {
    'use strict';
    angular.module('invoice1', [])
    .controller('InvoiceController', function() {
        this.quantity = 1;
        this.cost = '';
        this.inCurr = 'USD';
        this.currencies = ['USD','EUR','CNY'];
        this.usdToForeignRates = {
          USD: 1,
          EUR: 1.07,
          CNY:0.16
        };
        
        this.total = function total(outCurr) {
            return this.convertCurrency(this.quantity * this.cost, this.inCurr, outCurr);
        };
        
        this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
            return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];  
        };
        
        this.pay = function pay() {
            window.alert("Thanks!");  
        };
        
    });
})(window.angular);