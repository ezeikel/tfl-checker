module.exports = function($scope, $http, homeService) {
  $scope.message = 'Three Little Birds';
  $scope.name = 'Ezeikejl';

  $scope.helloWorld = homeService.helloWorld;

  $scope.url = 'https://api.tfl.gov.uk/line/mode/tube/status';

  $http.get($scope.url).then(function(response) {
    $scope.status = response.data;

    // for (var item in $scope.resp) {
    //   var line = $scope.resp[item];
    //   $scope.lines.push(line);
    // }
    //   console.log($scope.resp);
    //   console.log($scope.lines);
  });


};
