angular.module('game', [])

.controller('GameController', function($scope) {
  this.cards = [{type: 'photo', photo:'https://www.linkedin.com/mpr/pub/image-sbfAYJF2sIumHI5iYgHb35YszLsSKa-oDTHU87ntzKtFLHBysbfUbeE2zMVF9G-OR-gn/amira-anuar.jpg',id:1},
                {type: 'name', name:'Amira Anuar',id:1},
                {type: 'name', photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:2},
                {name: 'basdfassssfsaf asdffasdfasfasdfs',id:2},
                {type: 'photo',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:3},
                {type: 'photo',name:'csadfsafasf',id:3},
                {type: 'photo',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:4},
                {type: 'photo',name:'dasdfsaf',id:4},
                {type: 'photo',name:'esadfafs',id:5},
                {type: 'photo',photo:'https://avatars1.githubusercontent.com/u/529?v=1&s=48',id:5},
                ];

  $scope.cardsFlipped = [];
  $scope.game = {currentScore:0,highScore:0};
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
    link: function(scope, elem, attrs) {
      var flip = function() {
        console.log(scope);
        elem.toggleClass('flipped');
        var curcard = scope.playingcard;
        if (scope.$parent.cardsFlipped.length === 0) {
          elem.unbind('click');
          scope.$parent.cardsFlipped.push({elem:elem,card:curcard});
        } else if (scope.$parent.cardsFlipped.length === 1) {
          var firstcard = scope.$parent.cardsFlipped[0];
          document.getElementById("screen").style.display = 'block';
          if (curcard.id === firstcard.card.id) {
            $(elem[0]).bind("animationend webkitAnimationEnd", function() {
                $(elem).remove();
                $(firstcard.elem).remove();
              });
            setTimeout(function() {
              elem[0].className = elem[0].className + ' vanish';
              scope.$parent.cardsFlipped = [];
              document.getElementById("screen").style.display = 'none';
              console.log('hi',scope.$parent.game.currentScore);
              scope.$parent.game.currentScore++;
              scope.$apply();
            },1500);
          } else {
            // No match, so we flip the cards back over
            setTimeout(function() {
              firstcard.elem.toggleClass('flipped');
              firstcard.elem.bind('click', flip);
              elem.toggleClass('flipped');
              elem.bind('click', flip);
              scope.$parent.cardsFlipped = [];
              document.getElementById("screen").style.display = 'none';
            },2000);
          }
        }
    
      };
      if (attrs.clickToggle) {
        elem.bind('click', flip);
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
