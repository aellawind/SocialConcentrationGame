'use strict';

angular.module('webApp', ['ui.router',
                          'game.controller'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "login/login.html",
      // controller: "LoginController",
      authenticate: false
    })
    .state("game", {
      url: "/game",
      templateUrl: "game/game.html",
      controller: "Game",
      authenticate: false
    });
  // Send to login if the URL was not found
  $urlRouterProvider.otherwise("/login");
})

.run(function ($rootScope, $state, $location) {
	$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams){
	  console.log('state change');
    if (!$rootScope.hasOwnProperty("userprofile")) {
	    console.log('gets hereee');
      $location.path('/login');
	  }
	});
})

.controller('main', function ($scope,$rootScope,$location,$state) {
  $scope.getLinkedInData = function() {
    if(!$scope.hasOwnProperty("userprofile")){
      console.log('pastttt');
      IN.API.Profile("me").fields(
          [ "id", "firstName", "lastName", "pictureUrl",
              "publicProfileUrl" ]).result(function(result) {
        console.log('test', result);
          var userprofile =result.values[0]
          $rootScope.userprofile = userprofile;
          console.log('mew', $rootScope, $location);
          $state.transitionTo('game');

      }).error(function(err) {
        $scope.error = err;
      });
    }
  };
});