module.exports = function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/status', {
      templateUrl: 'app/components/status/statusView.html',
      controller: 'statusController'
    })
    .when('/planner', {
      templateUrl: 'app/components/planner/plannerView.html',
      controller: 'plannerController'
    })
    .when('/planner/:num', {
      templateUrl: 'app/components/planner/plannerView.html',
      controller: 'plannerController'
    })
    .otherwise({
      redirectTo: '/status'
    });
    $locationProvider.hashPrefix('');
}
