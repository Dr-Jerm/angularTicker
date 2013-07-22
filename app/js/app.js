var myApp = angular.module('myApp', []);

myApp.factory('Data', function(){
	return {message: "Im' data from a service"};
})

myApp.controller('FirstCtrl', function ($scope, Data){
	$scope.data = Data;
});

myApp.controller('SecondCtrl', function ($scope, Data) {
	$scope.data = Data;

	$scope.reverseMessage = function(message) {
		return message.split("").reverse().join("");
	}
});