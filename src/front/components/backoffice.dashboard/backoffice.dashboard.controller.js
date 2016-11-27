import _ from 'lodash';
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

				this.calculateDecisionStats();
			}, (err) => {
				alert('Impossible de requeter la liste des PNRs');
			});

		this.$scope.showPnrDetails = (pnr, index) => {
			this.$scope.selectedPnrIndex = index;
			this.$scope.selectedPnr = pnr;
		};

		this.$scope.firstData = [{"formattedValue":"Volvo","occurrences":10,"data":"Volvo"},{"formattedValue":"Ford Pinto","occurrences":6,"data":"Ford Pinto"},{"formattedValue":"Toyota Corolla","occurrences":5,"data":"Toyota Corolla"},{"formattedValue":"Ford Maverick","occurrences":5,"data":"Ford Maverick"},{"formattedValue":"AMC Matador","occurrences":5,"data":"AMC Matador"},{"formattedValue":"Chevrolet Impala","occurrences":4,"data":"Chevrolet Impala"},{"formattedValue":"Volkswagen Rabbit","occurrences":4,"data":"Volkswagen Rabbit"},{"formattedValue":"Chevrolet Chevette","occurrences":4,"data":"Chevrolet Chevette"},{"formattedValue":"AMC Hornet","occurrences":4,"data":"AMC Hornet"},{"formattedValue":"AMC Gremlin","occurrences":4,"data":"AMC Gremlin"},{"formattedValue":"Peugeot 504","occurrences":4,"data":"Peugeot 504"},{"formattedValue":"Toyota Corona","occurrences":4,"data":"Toyota Corona"},{"formattedValue":"Plymouth Fury III","occurrences":3,"data":"Plymouth Fury III"},{"formattedValue":"Datsun 210","occurrences":3,"data":"Datsun 210"},{"formattedValue":"Pontiac Catalina","occurrences":3,"data":"Pontiac Catalina"}];
		this.$scope.secondData = [{"formattedValue":"Volvo","filteredOccurrences":10},{"formattedValue":"Ford Pinto","filteredOccurrences":6},{"formattedValue":"Toyota Corolla","filteredOccurrences":5},{"formattedValue":"Ford Maverick","filteredOccurrences":5},{"formattedValue":"AMC Matador","filteredOccurrences":3},{"formattedValue":"Chevrolet Impala","filteredOccurrences":0},{"formattedValue":"Volkswagen Rabbit","filteredOccurrences":4},{"formattedValue":"Chevrolet Chevette","filteredOccurrences":4},{"formattedValue":"AMC Hornet","filteredOccurrences":4},{"formattedValue":"AMC Gremlin","filteredOccurrences":4},{"formattedValue":"Peugeot 504","filteredOccurrences":4},{"formattedValue":"Toyota Corona","filteredOccurrences":4},{"formattedValue":"Plymouth Fury III","filteredOccurrences":0},{"formattedValue":"Datsun 210","filteredOccurrences":3},{"formattedValue":"Pontiac Catalina","filteredOccurrences":0}];

		//setInterval(() => {
		//	console.log(this.$scope.filteredPnrs)
		//}, 2000);
	}

	calculateDecisionStats() {
		const grouping = _.groupBy(this.$scope.allPnrs, 'paxDecision');
		this.$scope.decisionStats = [
			{
				data: 'HOTEL',
				occurrences: grouping['HOTEL'].length
			},
			{
				data: 'CHEZ LUI',
				occurrences: grouping['CHEZ LUI'].length
			},
			{
				data: 'N/A',
				occurrences: grouping['N/A'].length
			},
			{
				data: 'ANNULATION',
				occurrences: grouping['ANNULATION'].length
			},
		];
		console.log(this.$scope.decisionStats);
	}

}