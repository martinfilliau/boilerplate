export default class PassengerOwnConfirmCtrl {

	constructor($scope, $state){
        this.$state = $state;
		this.$scope = $scope;
        this.$scope.flightNumber = "AF977";
        this.$scope.validate = this.validate.bind(this);
	}

    validate() {
        const { choice } = this.$scope;
        if (choice === "no") {
            this.$state.go("passenger-choice");
        } else if (choice === "yes") {
            this.$state.go("passenger-hotel-confirm");
        }
    }
}
