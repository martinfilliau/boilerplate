import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LandingCtrl from './components/landing/landing.controller';
import DashboardCtrl from './components/backoffice.dashboard/backoffice.dashboard.controller';
import HorizontalBarchart from './components/backoffice.dashboard/chart/barchart.directive';
import PassengerDetailsCtrl from './components/passenger.details/passenger-details.controller';
import PassengerContactsCtrl from './components/passenger.contacts/passenger-contacts.controller';
import PassengerThanksCtrl from './components/passenger.thanks/passenger-thanks.controller';
import PassengerChoiceCtrl from './components/passenger.choice/passenger-choice.controller';
import PassengerCancellationCtrl from './components/passenger.cancellation/passenger-cancellation.controller';
import PassengerCancellationConfirmCtrl from './components/passenger.cancellation.confirm/passenger-cancellation-confirm.controller';
import PassengerHotelCtrl from './components/passenger.hotel/passenger-hotel.controller';
import PassengerHotelConfirmCtrl from './components/passenger.hotel.confirm/passenger-hotel-confirm.controller';
import PassengerOwnCtrl from './components/passenger.own/passenger-own.controller';
import PassengerOwnConfirmCtrl from './components/passenger.own.confirm/passenger-own-confirm.controller';

var myApp = angular.module('myApp', [uiRouter]);
console.log(HorizontalBarchart);
myApp.directive('horizontalBarchart', HorizontalBarchart);
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

        .state('passenger-cancellation-confirm', {
            url: '/passenger/cancellation-confirm',
            templateUrl: 'components/passenger.cancellation.confirm/passenger-cancellation-confirm.html',
            controller: PassengerCancellationConfirmCtrl 
        })

        .state('passenger-hotel', {
            url: '/passenger/hotel',
            templateUrl: 'components/passenger.hotel/passenger-hotel.html',
            controller: PassengerHotelCtrl 
        })

        .state('passenger-hotel-confirm', {
            url: '/passenger/hotel-confirm',
            templateUrl: 'components/passenger.hotel.confirm/passenger-hotel-confirm.html',
            controller: PassengerHotelConfirmCtrl 
        })

        .state('passenger-hotel-thanks', {
            url: '/passenger/hotel-thanks',
            templateUrl: 'components/passenger.hotel.thanks/message.html',
            controller: PassengerThanksCtrl 
        })

        .state('passenger-own', {
            url: '/passenger/own',
            templateUrl: 'components/passenger.own/passenger-own.html',
            controller: PassengerOwnCtrl 
        })

        .state('passenger-own-confirm', {
            url: '/passenger/own-confirm',
            templateUrl: 'components/passenger.own.confirm/passenger-own-confirm.html',
            controller: PassengerOwnConfirmCtrl 
        })

        .state('passenger-own-thanks', {
            url: '/passenger/own-thanks',
            templateUrl: 'components/passenger.own.thanks/message.html',
            controller: PassengerThanksCtrl 
        })

    ;
}]);
