module.exports = function($http) {
  this.getData = function (url, options) {
    return $http.get(url)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log('Error: ', error);
        throw error;
      });
  }
};
