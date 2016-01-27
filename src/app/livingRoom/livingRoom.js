angular.module('homex.livingRoom', [
	'ui.router',
	'ui.bootstrap',
	'navbar'
])

.config(['$stateProvider',
	function config($stateProvider) {
		$stateProvider.state('livingRoom', {
			url: '/living_room',
			views: {
				"navbar": {
					controller: 'navbarCtrl',
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

.controller('livingRoomCtrl', ['$scope', '$http', 'ledAPIURL', 'remoteURL',
	function livingRoomCtrl($scope, $http, ledAPIURL, remoteURL) {
		$scope.ledAPIURL = ledAPIURL;
		$scope.states = [
			{text:'LEDs on', button:'btn-primary', command:'on'},
			{text:'LEDs off', button:'btn-default', command:'off'}
		];

		$scope.profiles = [
			{color:'blue', button:'btn-primary'},
			{color:'aqua', button:'btn-info'},
			{color:'green', button:'btn-success'},
			{color:'yellow', button:'btn-warning'},
			{color:'red', button:'btn-danger'},
			{color:'fuschia', button:'btn-default'}
		];
		$scope.remoteButtons = [
			{buttonText: 'avr on', buttonClass:'btn-success', device:'AVR', lircCommand: 'KEY_AUDIO'},
			{buttonText: 'avr off', buttonClass: 'btn-danger', device:'AVR', lircCommand: 'KEY_POWER'},
			{buttonText: 'projector', buttonClass: 'btn-danger', device: 'projector', lircCommand: 'KEY_POWER'},
			{buttonText: 'vol +', buttonClass: 'btn-warning', device: 'AVR', lircCommand: 'KEY_VOLUMEUP'},
			{buttonText: 'vol -', buttonClass: 'btn-warning', device: 'AVR', lircCommand: 'KEY_VOLUMEDOWN'},
			{buttonText: 'chromecast', buttonClass: 'btn-default', device: 'AVR', lircCommand: 'KEY_CD'},
			{buttonText: 'apple tv', buttonClass: 'btn-default', device: 'AVR', lircCommand: 'KEY_SAT'},
			{buttonText: 'rPi', buttonClass: 'btn-default', device: 'AVR', lircCommand:'KEY_PC'},
			{buttonText: 'aux', buttonClass: 'btn-default', device: 'AVR', lircCommand:'KEY_SPORT'}
		];

		$scope.easy_command = {};
		$scope.irSend = function(device, lircCommand) {
			$http.get(remoteURL + 'send_once/', {
				params: {
					remote: device,
					code: lircCommand
				}
			})
		}
		$scope.easy_command.clicked = function(color) {
			$scope.query = $http({
				method: 'GET',
				url: ledAPIURL+'easy/',
				params: {command: color}
			});
		};
	}
])