import { BackofficeDashboardService } from './backoffice.dashboard.service.js'

export default class DashboardCtrl {

	constructor($scope, $http, $timeout){
		this.$timeout = $timeout;
		this.$scope = $scope;
		this.backofficeDashboardService = BackofficeDashboardService($http);
		this.$scope.selectedPnr = null;

		this.backofficeDashboardService.getAllPnrs()
			.then((allPnrs)=>{
				this.$scope.allPnrs = allPnrs;
				this.$scope.filteredPnrs = allPnrs;
			}, (err) => {
				alert('Impossible de requeter la liste des PNRs');
			});

		this.$scope.showPnrDetails = (pnr, index) => {
			this.$scope.selectedPnrIndex = index;
			this.$scope.selectedPnr = pnr;
		};

		//setInterval(() => {
		//	console.log(this.$scope.filteredPnrs)
		//}, 2000);
	}

}