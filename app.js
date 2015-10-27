var app = angular.module('myApp', []);

app.directive('makeEditable', function() {
  return {
	  restrict: 'E',
	  transclude: true,
	  templateUrl: 'editable.html',
	  scope: true,
	  
	  link: function(scope, element, attrs){
	  	scope.editState = false;
	  	scope.buttonText = "Edit";

	  	scope.toggleEdit = function(){
	  		scope.editState = !scope.editState; // toggle editState
	  		if(scope.editState == false){
	  			scope.buttonText = "Edit";
	  		}
	  		else {
	  			scope.buttonText = "Save";
	  		}
	  	}
	  }
  }
})