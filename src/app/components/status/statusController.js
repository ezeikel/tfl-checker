module.exports = function($scope, GetApiDataService, CurrentTimeService) {

  GetApiDataService.getData('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(function(data) {
      $scope.status = data;
    });

  $scope.time = CurrentTimeService.time;
};
