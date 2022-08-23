var App = angular.module('App', ['ui.bootstrap', 'ui.router', 'ngBreadCrumb']);

App.config(function ($stateProvider) {
    $stateProvider

    .state('home', {
        url: '/home',
        views: {
            'main@': {
                templateUrl: 'home.html',
            }
        },
        data: {
            displayName: 'Home',
        }
    })

    .state('home.about', {
        url: '/about',
        views: {
            'main@': {
                templateUrl: 'about.html',
            }
        },
        data: {
            displayName: 'About'
        }
    })

    .state('home.detail', {
        url: '/:id',
        views: {
            'main@': {
                templateUrl: 'detail.html'
                //Sample controller declaration
                //controller: function ($scope, userId) {
                //    $scope.userId = userId;
                //}
            }
        },
        data: {
            displayName: '{{ id }}'
        },
        resolve: {
            id: function ($stateParams) {
                return $stateParams.id
            }
        }
    })

})
App.run(function ($state) {
    $state.go('home');
});
