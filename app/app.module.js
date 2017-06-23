require('angular');
require('angular-route');
require('angular-animate');

var StatusController = require('./components/status/statusController');
var PlannerController = require('./components/planner/plannerController');

var GetApiDataService = require('./services/getApiDataService');
var CurrentTimeService = require('./services/currentTimeService');

var lineStatusDirective = require('./directives/line-status/lineStatusDirective');

var routes = require('./app.routes.js');

angular.module('app', ['ngRoute'])

.controller('statusController', ['$scope', 'getApiDataService', 'currentTimeService', StatusController])
.controller('plannerController', ['$scope', PlannerController])

.service('getApiDataService', ['$http', GetApiDataService])
.service('currentTimeService', CurrentTimeService)

.directive('lineStatus', lineStatusDirective)

.config(routes);
