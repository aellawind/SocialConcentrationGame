angular.module('game', [])

.controller('GameController', function($scope) {
  this.cards = [{name:'a',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:1},
                {name:'b',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:1},
                {name:'c',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                {name:'c',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                                {name:'c',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                {name:'c',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                {name:'c',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                {name:'c',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2}

                ];
  // get the data and randomize it before i turn it into tiles
  // third id will be the id we want to understand and 
  // we compare that internally inside the controller
})

.directive('board', function() {
  return {
    restrict: 'E',

    templateUrl: 'game/boardTemplate.html',
    replace: false
  }

})

.directive('card', function(){
  // console.log('data in tile directive', Data);
  return {
    restrict:'E',
    scope: {
      name: '@',
      photo: '@',
      playingcard: '='
    },
    templateUrl:'game/cardTemplate.html',
    replace: true,
     // link: function(scope, elem, attrs, model) {
     // // if name, assign target to name section
     // // if picture, assign target to picture section
     // // append that child to the target 
     //  elem.bind('click', function() {
     //    elem.css('background-color', 'white');
     //    scope.$apply(function() {
     //      scope.color = "white";
     //    });
     //  });
     //  elem.bind('mouseover', function() {
     //    elem.css('cursor', 'pointer');
     //  });
    // }// link: function(scope, element, attrs, model){
    //   var target = document.getElementById(scope.color+'Bucket');
    //   target.appendChild(element[0]);        
    // }
  }
})

