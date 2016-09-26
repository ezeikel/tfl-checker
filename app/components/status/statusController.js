module.exports = function($scope, $http, statusService) {
  $scope.message = 'Three Little Birds';
  $scope.name = 'Ezeikel';

  $scope.helloWorld = statusService.helloWorld;

  $scope.url = 'https://api.tfl.gov.uk/line/mode/tube/status';

  $http.get($scope.url).then(function(response) {

    $scope.status = response.data;

    var date = new Date();
    var minutes = date.getMinutes();

    $scope.hours = date.getHours();
    $scope.formattedMinutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    $scope.period = $scope.hours < 12 ? 'am' : 'pm';
    $scope.time = $scope.hours + ':' + $scope.formattedMinutes + $scope.period;
  });
};
