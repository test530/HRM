/**
 * Created by maniteja on 22-07-2017.
 */
/**
 * Created by anusha on 18-07-2017.
 */
(function () {
    'use strict';

    var mainModule = angular.module('StoreFront');
    mainModule.filter("dateFilter", function () {
        return function (item) {
            if (item != null) {
                return new Date(parseInt(item.substr(6)));
            }
            return "";
        };
    });





}());