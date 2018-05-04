require('angular');
require('angular-route');
require('angular-animate');

const StatusController = require('./components/status/statusController');
const PlannerController = require('./components/planner/plannerController');

const GetApiDataService = require('./services/getApiDataService');
const CurrentTimeService = require('./services/currentTimeService');

const lineStatusDirective = require('./directives/line-status/lineStatusDirective');

const routes = require('./app.routes.js');

angular.module('app', ['ngRoute'])

.controller('statusController', ['$scope', 'getApiDataService', 'currentTimeService', StatusController])
.controller('plannerController', ['$scope', PlannerController])

.service('getApiDataService', ['$http', GetApiDataService])
.service('currentTimeService', CurrentTimeService)

.directive('lineStatus', lineStatusDirective)

.config(routes);
