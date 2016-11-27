export default class PassengerHotelCtrl {

	constructor($scope, $state){
        this.$state = $state;
		this.$scope = $scope;
        this.$scope.flightNumber = "AF977";
        this.$scope.validate = this.validate.bind(this);
	}

    validate() {
        this.$state.go("passenger-hotel-thanks");
    }
}
