export default function($http) {
  this.getData = (url, options) => {
    return $http.get(url)
      .then(response => response.data)
      .catch(error => {
        console.log('Error: ', error);
        throw error;
      });
  }
};
