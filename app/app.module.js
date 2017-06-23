require('angular');
require('angular-route');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-material');

var StatusController = require('./components/status/statusController');
var GetApiDataService = require('./components/status/getApiDataService');

var PlannerController = require('./components/planner/plannerController');
var PlannerService = require('./components/planner/PlannerService');

var routes = require('./app.routes.js');

var lineStatusDirective = require('./shared/line-status/lineStatusDirective');

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMaterial'])

.service('getApiDataService', ['$http', GetApiDataService])
.service('plannerService', PlannerService)

.controller('statusController', ['$scope', 'getApiDataService', StatusController])
.controller('plannerController', ['$scope', '$routeParams', 'plannerService', PlannerController])

.directive('lineStatus', lineStatusDirective)

.config(routes);
