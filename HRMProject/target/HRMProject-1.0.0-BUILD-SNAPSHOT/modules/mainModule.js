
    var mainModule = angular.module('mainModule',['ui.router','ngMaterial','ngMessages','flash','ngAnimate']);
    mainModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
        $stateProvider
        	.state('home', {
                url: '/home',
                templateUrl: 'views/homepage.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Home'
                }
                
            })
            

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardcontroller',
            controllerAs: 'vm',
            data: {
                pageTitle: 'dashboard'
            }
        });
    	 $stateProvider.state('timeSheet', {
            url: '/timeSheet',
            templateUrl: 'views/timesheet.html',
            controller: 'timesheetController',
            controllerAs: 'vm',
            data: {
                pageTitle: 'TimeSheet'
            }
        });
    	
    	



    }]);



