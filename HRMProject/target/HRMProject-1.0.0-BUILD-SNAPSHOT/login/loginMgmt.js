
var login = angular.module('login', ['ui.router', 'ngResource', 'ngAnimate']);

alert();
login.config(["$stateProvider", function ($stateProvider) {

    //login page state
	$urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Login'
        }
    });

}]);

