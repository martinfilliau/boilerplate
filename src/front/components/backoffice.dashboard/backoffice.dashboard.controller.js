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
				this.calculateHotelStats();
			}, (err) => {
				alert('Impossible de requeter la liste des PNRs');
			});

		this.$scope.showPnrDetails = (pnr, index) => {
			this.$scope.selectedPnrIndex = index;
			this.$scope.selectedPnr = pnr;
		};

        this.$scope.changedMessage = this.changedMessage.bind(this);
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
		setInterval(() => {
			this.$timeout(() => {
				this.$scope.decisionStats = [
					{
						data: 'HOTEL',
						occurrences: grouping['HOTEL'].length + Math.floor(Math.random() * 5)
					},
					{
						data: 'CHEZ LUI',
						occurrences: grouping['CHEZ LUI'].length + 1
					},
					{
						data: 'N/A',
						occurrences: grouping['N/A'].length - 3
					},
					{
						data: 'ANNULATION',
						occurrences: grouping['ANNULATION'].length + Math.floor(Math.random() * 5)
					},
				];
			});
		}, 5000);
	}

	calculateHotelStats() {
		const grouping = _.groupBy(this.$scope.allPnrs, 'assignedHotel');
		console.log({grouping});
		this.$scope.hotelsStats = [
			{
				data: 'Radisson Blu',
				occurrences: grouping['Radisson Blu'].length
			},
			{
				data: 'Le Meridien',
				occurrences: grouping['Le Meridien'].length
			},
			{
				data: 'PARC INN',
				occurrences: grouping['PARC INN'].length
			},
			{
				data: 'Royal Palm Hotel',
				occurrences: grouping['Royal Palm Hotel'].length
			},
		];
	}

    changedMessage() {
        const value = this.$scope.message;
        if (value === "late") {
            this.$scope.value = "Cher [Genre] [Nom PNR],\nVotre vol [Num vol] au départ de [Départ] et à destination de [Destination] rencontre à [Heure envoi message] un [Message retard].\nA [Heure envoi message], l’heure estimée de départ de votre vol est [EDT] (heure locale) et l’horaire d’arrivée prévue est [ETA] (heure de destination).\nNous sommes désolés de ce retard. Toutes nos équipes sont mobilisées et font tout leur possible pour réduire les désagréments causés par cette situation.\nPour plus d’informations sur votre vol en temps réel :";
        } else if (value === "hosting") {
            this.$scope.value = "Cher [Genre] [Nom PNR],\nSuite au retard de votre vol [Num vol], nous cherchons une solution pour vous héberger dans les meilleurs délais.\nVeuillez vous connecter sur votre espace Notiflight ( https://www.airfrance.fr/notiflight/[Numvol]/[NumPNR]) pour nous faire part de vos préférences concernant les possibilités d’hébergement.\nNous vous tiendrons informé régulièrement de l’avancée de votre dossier. Nous sommes encore désolés de ce retard. Toutes nos équipes sont mobilisées et font tout leur possible pour réduire les désagréments causés par cette situation.";
        } else if (value === "foundHotel") {
            this.$scope.value = "Cher [Genre] [Nom PNR],\nSuite à votre réponse concernant vos préférences d’hébergement, nous vous confirmons avoir trouvé une solution.\nVous allez être hébergé à l’hôtel [nom hôtel] de [aéroport départ], dans [configuration chambre] aux frais d’Air France.\nNous vous informerons le plus rapidement possible de l’arrivée d’un bus à destination de votre hôtel.\nL’équipe d’Air France à [Aéroport Départ]";
        } else if (value === "bus") {
            this.$scope.value = "Cher [Genre] [Nom PNR],\nLe bus pour rejoindre votre hôtel est en approche. Veuillez vous rendre dans les meilleurs délais [lieu de rendez-vous]. devant le comptoir Air France situé au niveau départ, porte L.\n[Commentaire particulier]Une pancarte avec le nom de votre hôtel sera apposée sur le bus.\nVeuillez vous connecter sur votre espace NotiFlight ( https://www.airfrance.fr/notiflight/[Numvol]/[NumPNR]) pour suivre l’état de vol depuis votre hôtel.";
        }
    }

}
