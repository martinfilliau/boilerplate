import angular from "angular";


var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'components/landing/landing.html',
            controller: 'LandingCtrl'
        })
    ;
}]);



//class AppCtrl {
//  constructor() {
//      this.coucou = "yes";
//  }
//}
//
//angular.module("app", [])
//  .controller('AppCtrl', AppCtrl);

