module.exports = function($scope, GetApiDataService) {
  GetApiDataService.getData('https://api.tfl.gov.uk/line/mode/tube/status').then(function(data) {
    $scope.status = data;
  });

  var date = new Date();
  var minutes = date.getMinutes();

  $scope.hours = date.getHours();
  $scope.formattedMinutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
  $scope.period = $scope.hours < 12 ? 'am' : 'pm';
  $scope.time = $scope.hours + ':' + $scope.formattedMinutes + $scope.period;
};
