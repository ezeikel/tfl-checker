module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/status/statusView.html',
      controller: 'statusController'
    })
    .when('/planner/:num', {
      templateUrl: 'app/components/planner/plannerView.html',
      controller: 'plannerController'
    })
    .when('/planner', {
      templateUrl: 'app/components/planner/plannerView.html',
      controller: 'plannerController'
    })
}
