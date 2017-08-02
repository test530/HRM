/**
 * Created by ManiTeja on 7/05/2017.
 */
(function () {
    'use strict';
    //['ui.router', 'ngDialog', 'ui.bootstrap','ui-rangeSlider', 'toastr']);
    var mainModule = angular.module('StoreFront',

        ['ui.router', 'ngDialog', 'ui.bootstrap', 'mobile-angular-ui',
            'mobile-angular-ui.gestures', 'ui-rangeSlider', 'toastr', 'ui-rangeSlider','ngStorage','ngMaterial','ngMessages']);


    mainModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        	.state('home', {
                url: '/home',
                controller: 'controllers/HomeController',
                templateUrl: 'views/homepage.html'
            })
            




    }]);


}());
