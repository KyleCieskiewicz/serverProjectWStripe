var app = angular.module('smoothieApp', ['ui.router', 'angularPayments']);

app.config(function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/home');
    
        $stateProvider
    
            .state('home', {
    
                url: '/home',
                templateUrl: 'views/partial-home.html'
            })
    
            .state('getStarted', {
                url: '/getStarted',
                templateUrl: 'views/partial-getStarted.html',
                controller: 'getStartedController'
                
            })
    
            .state('profile', {
                url: '/profile',
                templateUrl: 'views/partial-profile.html',
                controller: 'getStartedController'
            })
    
            .state('orders', {
                url: '/orders',
                templateUrl: 'views/partial-orders.html',
                controller: 'updateController'
            })
    
            .state('ingredients', {
                url: '/ingredients',
                templateUrl: 'views/partial-ingredients.html',
            })

            .state('checkout', {
                url: '/checkout',
                templateUrl: 'views/partial-checkout.html',
                controller: 'checkoutController'
            })
    
            .state('paysuccess', {
                url: '/paysuccess',
                templateUrl: 'views/partial-paysuccess.html'
            });
    
    
    
    });
