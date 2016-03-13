eventApp.controller('LoginCtrl', ['$scope', '$http', 'auth', 'store', '$location', '$rootScope', function ($scope, $http, auth, store, $location, $rootScope) {
//login button
$scope.login = function() {
  auth.signin({}, function (profile, token) {

    store.set('profile', profile);
    store.set('token', token);
    $location.path('/');
  }, function (error) {
    console.log(error);
  });
}

}]);
