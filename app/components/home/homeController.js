module.exports = function($scope, homeService) {
  $scope.message = 'Three Little Birds';
  $scope.name = 'Ezeikejl';

  $scope.helloWorld = homeService.helloWorld;
};
