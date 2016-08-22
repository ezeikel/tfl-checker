require('angular');
require('angular-route');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-material');

var StatusController = require('./components/status/statusController');
var StatusService = require('./components/status/StatusService');

var PlannerController = require('./components/planner/plannerController');
var PlannerService = require('./components/planner/PlannerService');

var routes = require('./app.routes.js');

var articleDirective = require('./shared/article/articleDirective');

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMaterial'])

.service('statusService', StatusService)
.service('plannerService', PlannerService)

.controller('statusController', ['$scope', '$http', 'statusService', StatusController])
.controller('plannerController', ['$scope', '$routeParams', 'plannerService', PlannerController])

.directive('articleDir', articleDirective)

.config(routes);
