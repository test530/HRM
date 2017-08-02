/**
 * Created by amitabhs on 9/18/2015.
 */
(function () {
    'use strict'

    var mainModule = angular.module("StoreFront");

    mainModule.directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    });

}());