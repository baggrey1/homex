angular.module('homex.livingRoom', [
	'ui.router',
	'ui.bootstrap'
])

.config(['$stateProvider',
	function config($stateProvider) {
		$stateProvider.state('livingRoom', {
			url: '/living_room',
			views: {
				"navbar": {
					controller: 'NavbarCtrl',
					templateUrl: 'src/components/navbar.tpl.html'
				},
				"main": {
					controller: 'livingRoomCtrl',
					templateUrl: 'src/app/livingRoom/livingRoom.tpl.html'
				}
			}
		})
	}
])

.controller('livingRoomCtrl', ['$scope', 
	function livingRoomCtrl($scope) {
		
	}
])