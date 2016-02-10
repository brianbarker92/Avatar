var app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl)	
.directive('avatar', avatarDirective);

function mainCtrl ($scope) {
  $scope.users = [{
    name: 'George Washington',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'
  }];
  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url
    });
    user.name = '';
    user.url = '';
  };
}


function avatarDirective () {
  return {
    scope: {
      user: '=' 
    },
    restrict: 'E', 
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ), 
    link: link
  };
  
  function link (scope) { 
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
    }
  }

}