module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeController'
    })
    .when('/blog/:num', {
      templateUrl: 'app/components/blog/blogView.html',
      controller: 'blogController'
    })
    .when('/blog', {
      templateUrl: 'app/components/blog/blogView.html',
      controller: 'blogController'
    })
}
