module.exports = function($scope, $routeParams, plannerService) {
  $scope.message = 'Big bad wolf';
  $scope.name = 'Carlos the Generals';
  $scope.num = $routeParams.num || 1;
  $scope.newer = 'testing 123';

  $scope.helloWorld = plannerService.helloWorld;

  // BUTTONS ======================

  // define some random object and button values
  $scope.bigData = {};

  $scope.bigData.breakfast = false;
  $scope.bigData.lunch = true;
  $scope.bigData.dinner = false;

  // COLLAPSE =====================
  $scope.isCollapsed = false;

};
