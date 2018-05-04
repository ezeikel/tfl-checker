module.exports = function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/status', {
      template: require('./components/status/statusView.html'),
      controller: 'statusController'
    })
    .when('/planner', {
      template: require('./components/planner/plannerView.html'),
      controller: 'plannerController'
    })
    .when('/planner/:num', {
      template: require('./components/planner/plannerView.html'),
      controller: 'plannerController'
    })
    .otherwise({
      redirectTo: '/status'
    });
    $locationProvider.hashPrefix('');
}
