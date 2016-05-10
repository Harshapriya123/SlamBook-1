// var app = angular.module('slambook',[]);
// app.controller('formCtrl',function($scope)
// 	{
// 	$scope.user = {
// 		name:'',
// 		lovedone:''
// 	};
// 	$scope.saveSlam = function(){
// 		localStorage.setItem('user', JSON.stringify($scope.user));
// 	}
	
// });



var app = angular.module('slambook',[]);
app.controller('formCtrl',function($scope)
	{
	// $scope.user = {
	// 	name:'',
	// 	lovedone:''
	// };
	$scope.saveSlam = function(){
		var value = {
			"name" : $scope.user.name,
			"lovedone" : $scope.user.lovedone
		};
		localStorage.setItem('user', JSON.stringify(value));
		$scope.getvalue = JSON.parse(localStorage.getItem('user'));
		console.log($scope.getvalue.name);
	}

});