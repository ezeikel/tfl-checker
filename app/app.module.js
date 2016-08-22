require('angular');
require('angular-route');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-material');

var HomeController = require('./components/home/homeController');
var HomeService = require('./components/home/HomeService');

var BlogController = require('./components/blog/blogController');
var BlogService = require('./components/blog/BlogService');

var routes = require('./app.routes.js');

var articleDirective = require('./shared/article/articleDirective');

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMaterial'])

.service('homeService', HomeService)
.service('blogService', BlogService)

.controller('homeController', ['$scope', 'homeService', HomeController])
.controller('blogController', ['$scope', '$routeParams', 'blogService', BlogController])

.directive('articleDir', articleDirective)

.config(routes);
