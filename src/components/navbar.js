angular.module('navbar', [
	'ui.router',
	'ui.bootstrap'
])

.controller('navbarCtrl', ['$scope', '$state',
	function navbarCtrl($scope, $state) {
		$scope.setState = function(destination) {
			$state.go(destination);
		};
		
	}
])