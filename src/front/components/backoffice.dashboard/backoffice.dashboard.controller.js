import { BackofficeDashboardService } from './backoffice.dashboard.service.js'

export default class DashboardCtrl {

	constructor($scope, $http){
		this.$scope = $scope;
		this.$scope.paxName = "maalej";
		this.backofficeDashboardService = BackofficeDashboardService($http);
		console.log(BackofficeDashboardService());

		this.backofficeDashboardService.getAllPnrs()
			.then((allPnrs)=>{
				this.$scope.allPnrs = allPnrs;
			}, (err) => {
				alert('Impossible de requeter la liste des PNRs');
			});
	}
}