angular.module('app', [
	'ui.router',
	'homex.livingRoom'
])

.value('ledAPIURL', 'http://192.168.1.100:5000/')
.value('bedroomURL', 'http://192.168.1.102:5000/')
.value('remoteURL', 'http://192.168.1.101:4444/')

.config(['$locationProvider', '$httpProvider', '$urlRouterProvider',
	function homexConfig($locationProvider, $httpProvider, $urlRouterProvider) {
		// CORS
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$locationProvider.html5Mode(true);

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