export const BackofficeDashboardService = ($http) => (
	{
		getAllPnrs: () => $http({
			method: 'GET',
			url: '/pnrs'
		}).then((resp) => resp.data)
	}
);
