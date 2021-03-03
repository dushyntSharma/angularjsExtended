'use strict';
var loginapp = angular.module('loginapp', ['ui.router','ui.bootstrap']);
loginapp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/homeView.html',
                controller: 'homeController'
            })

            .state('login', {
                url: '/',
                templateUrl: 'views/loginView.html',
                controller: 'loginController'
            })
            .state('register', {
                url: '/user',
                templateUrl: 'views/registerView.html',
                controller: 'registerController'
             })
            .state('forgot', {
                url: '/forgot',
                templateUrl: 'views/forgotView.html',
                controller: 'forgotController'
            })

            .state('loginsucess', {
                url: '/login_sucess',
                templateUrl: 'views/loginSucess.html',
                controller: 'loginSucess'
            })
    }
]);