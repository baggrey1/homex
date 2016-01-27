angular.module('homex', [
	'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider',
	function homexConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/living_room');
	}
])

.run([function run() {

}])

.controller('AppCtrl', ['$scope',
	function AppCtrl($scope) {

	}
])

;