'use strict';

app.config(['$stateProvider', '$urlRouterProvider',"$locationProvider",
    function($stateProvider, $urlRouterProvider,$locationProvider) {

        // For unmatched routes
      //  $urlRouterProvider.otherwise('/login');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/testRokk3rlabs/html/index.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/testRokk3rlabs/html/dashboard.html',
                controller : 'dashboardController'
            })
            .state('news', {
                url: '/news',
                templateUrl: '/testRokk3rlabs/html/news.html',
                controller : 'MyCtrl'
            })
            .state('error', {
                url: '/errorScreen',
                templateUrl: '/testRokk3rlabs/html/errorScreen.html'
            })
            .state('boardBrief', {
                url: '/boardBrief',
                templateUrl: '/testRokk3rlabs/html/boardBrief.html'
            });
            // .state('subscriptions', {
            //     url: '/subscriptions',
            //     templateUrl: '/testRokk3rlabs/html/subscriptions.html',
            //     controller : 'subsController',
            //     resolve: {
            //         subscriptionsData: function(userFactory){
            //             return userFactory.getUserSubscriptions();
            //         }
            //     }
            // });
    }

]);

