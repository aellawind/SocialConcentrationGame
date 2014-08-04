/** LinkedIn functions to handle Auth **/

// As soon as the linkedin auth framework has completed loading, this runs
var linkedinLoad = function() {
	IN.Event.on(IN, "auth", function() {
		onLinkedInLogin();
	});
	IN.Event.on(IN, "logout", function() {
		onLinkedInLogout();
	});
};

// This executes on the logout event.
var onLinkedInLogout = function() {
	location.reload(true);
};

// This executes once the user has successfully logged in
var onLinkedInLogin = function() {
  // Pass the user info to angular
	// angular.element(document.getElementById("gameBody")).scope().$apply(
	// 	function($scope) {
	// 		//$scope.getLinkedInData();
	// 	}
	// );
};