import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LandingCtrl from './components/landing/landing.controller';
import DashboardCtrl from './components/backoffice.dashboard/backoffice.dashboard.controller';

var myApp = angular.module('myApp', [uiRouter]);

myApp.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('landing', {
            url: '/',
            templateUrl: 'components/landing/landing.html',
            controller: LandingCtrl
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'components/backoffice.dashboard/backoffice.dashboard.html',
            controller: DashboardCtrl
        })
    ;
}]);
