import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LandingCtrl from './components/landing/landing.controller';
import DashboardCtrl from './components/backoffice.dashboard/backoffice.dashboard.controller';
import PassengerDetailsCtrl from './components/passenger.details/passenger-details.controller';
import PassengerContactsCtrl from './components/passenger.contacts/passenger-contacts.controller';
import PassengerThanksCtrl from './components/passenger.thanks/passenger-thanks.controller';
import PassengerChoiceCtrl from './components/passenger.choice/passenger-choice.controller';
import PassengerCancellationCtrl from './components/passenger.cancellation/passenger-cancellation.controller';

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

        .state('passenger-details', {
            url: '/passenger',
            templateUrl: 'components/passenger.details/passenger-details.html',
            controller: PassengerDetailsCtrl
        })

        .state('passenger-contacts', {
            url: '/passenger/contacts',
            templateUrl: 'components/passenger.contacts/passenger-contacts.html',
            controller: PassengerDetailsCtrl
        })

        .state('passenger-thanks', {
            url: '/passenger/thanks',
            templateUrl: 'components/passenger.thanks/passenger-thanks.html',
            controller: PassengerThanksCtrl
        })
        
        .state('passenger-choice', {
            url: '/passenger/choice',
            templateUrl: 'components/passenger.choice/passenger-choice.html',
            controller: PassengerChoiceCtrl 
        })

        .state('passenger-cancellation', {
            url: '/passenger/cancellation',
            templateUrl: 'components/passenger.cancellation/passenger-cancellation.html',
            controller: PassengerCancellationCtrl 
        })



    ;
}]);
