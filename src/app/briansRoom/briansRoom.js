angular.module('homex.briansRoom', [
	'ui.router',
	'ui.bootstrap',
	'navbar',
	'ngSocket',
	'ui.slider'
])

.config(['$stateProvider', '$socketProvider',
	function config($stateProvider, $socketProvider) {
		$stateProvider.state('briansRoom', {
			url: '/brians_room',
			views: {
				"navbar": {
					controller: 'navbarCtrl',
					templateUrl: 'src/components/navbar.tpl.html'
				},
				"main": {
					controller: 'briansRoomCtrl',
					templateUrl: 'src/app/briansRoom/briansRoom.tpl.html'
				}
			}
		})

		$socketProvider.setUrl('http://192.168.1.102:5000/');
	}
])

.controller('briansRoomCtrl', ['$scope', '$http', '$socket', 'bedroomServerURL', 'bedroomSocketURL', 
	function briansRoomCtrl($scope, $http, $socket, bedroomServerURL, bedroomSocketURL) {
		$scope.states = [
			{text:'LEDs on', button:'btn-primary', command:'on'},
			{text:'LEDs off', button:'btn-default', command:'off'}
		];

		$scope.colors = [
			{'name': 'red', 'intensity':175},
			{'name':'green', 'intensity':150},
			{'name':'blue', 'intensity':140,}
		];

		$scope.bedroom_command = function(state) {
			$http.get(bedroomServerURL+'state/', {
				params:{command: state}
			});
		};
		$scope.lastStateQuery = $http.get(
			bedroomServerURL+'last-state/').then(function(response) {
				var colorsObject = response.data.lastColor
				var colorsArray = [
					{'name':'red', 'intensity': colorsObject.red},
					{'name':'green', 'intensity': colorsObject.green},
					{'name':'blue', 'intensity': colorsObject.blue}
				]
			//	angular.copy(colorsArray, $scope.colors);
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