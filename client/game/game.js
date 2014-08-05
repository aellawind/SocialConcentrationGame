angular.module('game', [])

.controller('GameController', function($scope) {
  this.cards = [{type: 'photo', photo:'https://www.linkedin.com/mpr/pub/image-sbfAYJF2sIumHI5iYgHb35YszLsSKa-oDTHU87ntzKtFLHBysbfUbeE2zMVF9G-OR-gn/amira-anuar.jpg',id:1},
                {type: 'name', name:'a',id:1},
                {type: 'name', photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                {name: 'b',id:2},
                {type: 'photo',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:3},
                {type: 'photo',name:'c',id:3},
                {type: 'photo',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:4},
                {type: 'photo',name:'d',id:4},
                {type: 'photo',name:'e',id:5},
                {type: 'photo',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:5},
                ];

  $scope.cardsFlipped = [];
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

.directive('card', function() {
  return {
    restrict: 'E',
    scope: false,
    link: function($scope, $elem, $attrs) {
      console.log('s',$scope);
      // behavior for flipping effect.
      var flip = function() {
        $elem.toggleClass('flipped');
        var curcard = $scope.playingcard;
        if ($scope.$parent.cardsFlipped.length === 0) {
          $scope.$parent.cardsFlipped.push({elem:$elem,card:curcard});
        } else if ($scope.$parent.cardsFlipped.length === 1) {
          var firstcard = $scope.$parent.cardsFlipped[0];
          if (curcard.id === firstcard.card.id) {
            console.log('match');
            setTimeout(function() {
              console.log('delay');
              firstcard.elem.toggleClass('flipped');
              $elem.toggleClass('flipped');
            },2000);
          } else {
            console.log('not match');
            // flip over again
          }
        }
    
      };
      if ($attrs.clickToggle) {
        $elem.bind('click', flip);
      }
    }
  };
})

.directive('cardBack', function(){
  return {
    restrict:'E',
    scope: {
      playingcard: '='
    },
    templateUrl: function (tElement, tAttrs) {
      return 'game/photocardTemplate.html';
    },
    replace: false
  }

})

.directive('name', function(){
  // console.log('data in tile directive', Data);
  return {
    restrict:'E',
    scope: {
      name: '@',
      photo: '@',
      playingcard: '='
    },
    templateUrl: 'game/namecardTemplate.html',
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

