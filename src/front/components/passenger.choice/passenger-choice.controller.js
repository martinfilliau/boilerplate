export default class PassengerChoiceCtrl {

	constructor($scope, $state){
        this.$state = $state;
		this.$scope = $scope;
        this.$scope.flightNumber = "AF977";
        this.$scope.validate = this.validate.bind(this);
	}

    validate() {
        const { choice } = this.$scope;
        if (choice === "cancel") {
            this.$state.go("passenger-cancellation");
        } else if (choice === "hotel") {

        } else if (choice === "own") {

        }
    }
}
