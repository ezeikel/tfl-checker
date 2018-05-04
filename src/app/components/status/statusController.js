export default ($scope, GetApiDataService, CurrentTimeService) => {

  GetApiDataService.getData('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(data => $scope.status = data);

  $scope.time = CurrentTimeService.time;
};
