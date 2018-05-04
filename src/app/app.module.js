import 'angular';
import 'angular-route';
import 'angular-animate';
import StatusController from './components/status/statusController';
import PlannerController from './components/planner/plannerController';
import GetApiDataService from'./services/getApiDataService';
import CurrentTimeService from './services/currentTimeService';
import lineStatusDirective from './directives/line-status/lineStatusDirective';
import routes from './app.routes.js';

angular.module('app', ['ngRoute'])

.controller('statusController', ['$scope', 'getApiDataService', 'currentTimeService', StatusController])
.controller('plannerController', ['$scope', PlannerController])

.service('getApiDataService', ['$http', GetApiDataService])
.service('currentTimeService', CurrentTimeService)

.directive('lineStatus', lineStatusDirective)

.config(routes);
