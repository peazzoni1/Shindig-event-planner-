eventApp.controller('MainCtrl', ['$scope', '$http', 'auth', 'store', '$localStorage', '$location','$rootScope', function ($scope, $http, auth, store, $localStorage, $location, $rootScope) {
 $scope.auth = auth; 
  $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

  $scope.logOut = function () {
        auth.signout();
        store.remove('profile');
        store.remove('token');
        $location.path('/login');
      }

  $scope.eventCards = $localStorage.eventCards;
//push form data into object array on submit
  $scope.addEvent = function() {
   $localStorage.eventCards.push({
     "title": $scope.title,
     "email": $scope.email,
     "name": $scope.name,
     "phone": $scope.phone,
     "start": $scope.start,
     "end": $scope.end,
     "location": $scope.location,
     "date": $scope.date,
     "details": $scope.details
   });
   //reset form fields
   $scope.title = "";
   $scope.email = "";
   $scope.name = "";
   $scope.phone = "";
   $scope.location = "";
   $scope.date = "";
   $scope.start = "";
   $scope.end = "";
   $scope.details = "";
   $scope.form.$setUntouched();
  }
//delete cards with trash icon
  $scope.remove = function(card) {
    $scope.idx = $localStorage.eventCards.indexOf(card);
    $localStorage.eventCards.splice($scope.idx, 1);
    };
}]);
