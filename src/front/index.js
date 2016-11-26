import angular from 'angular';
import LandingCtrl from './components/landing/landing.controller';
import uiRouter from 'angular-ui-router';
var myApp = angular.module('myApp', [uiRouter]);

myApp.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'components/landing/landing.html',
            controller: LandingCtrl
        })
    ;
}]);
