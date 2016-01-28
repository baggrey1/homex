angular.module('homex.briansRoom', [
	'ui.router',
	'ui.bootstrap',
	'navbar',
	'ngSocket',
	'ui.slider'
])

.config(['$stateProvider',
	function config($stateProvider, $socketProvider, bedroomSocketURL) {
		$stateProvider.state('briansRoom', {
			url: '/brians_room',
			views: {
				"navbar": {
					controller: 'navbarCtrl',
					templateUrl: 'src/components/navbar.tpl.html'
				},
				"main": {
					controller: 'briansRoomCtrl',
					templateUrl: 'src/app/livingRoom/livingRoom.tpl.html'
				}
			}
		})

		$socketProvider.setUrl(bedroomSocketURL);
	}
])

.controller('briansRoomCtrl', ['$scope', '$http', '$socket', 'bedroomServerURL', 'bedroomSocketURL', 
	function briansRoomCtrl($scope, $http, $socket, bedroomServerURL, bedroomSocketURL) {
		$scope.states = [
			{text:'LEDs on', button:'btn-primary', command:'on'},
			{text:'LEDs off', button:'btn-default', command:'off'}
		];

		$scope.bedroom_command = function(state) {
			$http.get(bedroomServerURL+'state/', {
				params:{command: state}
			});
		};
		$scope.lastStateQuery = $http.get(
			bedroomURL+'last-state/').then(function(response) {
				$scope.colors = response.lastColor
			});
		
		$scope.$watch('colors',function() {
			$socket.emit('json',$scope.colors);			
		}, true);

		$scope.colorOptions = {
			orientation: 'horizontal',
			min: 0,
			max: 255,
			range: 'min'
		}

		$scope.colorpicker = {
			red: 255,
			green: 140,
			blue: 60,
			options: {
				orientation: 'horizontal',
				min: 0,
				max: 255,
				range: 'min',
			}
		};
	}
])

;