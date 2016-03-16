eventApp.controller('MainCtrl', ['$scope', '$http', 'auth', 'store', '$localStorage', '$location','$rootScope', '$mdDialog', function ($scope, $http, auth, store, $localStorage, $location, $rootScope, $mdDialog) {
$scope.auth = auth;
$scope.guestList = [];

$scope.logOut = function () {
      auth.signout();
      store.remove('profile');
      store.remove('token');
      $location.path('/login');
}

$scope.toggleSearch = function() {
      $scope.showSearch = !$scope.showSearch;
}

$scope.favorite = function(card) {
    card.favicon = "favorite";
}

$scope.showFavorites;
$scope.getFavorites = function(card) {
  if(card.favicon === "favorite") {
    return card;
  }
}

$scope.getAllCards = function() {
  $scope.showFavorites = " ";
}

$scope.showPrompt = function(ev) {
    var confirm = $mdDialog.prompt()
          .title('New Invite')
          .textContent('add a guest')
          .placeholder('guest name')
          .ariaLabel('Guest name')
          .targetEvent(ev)
          .ok('Added!')
          .cancel('Cancel');
  $mdDialog.show(confirm).then(function(result) {
            $scope.guestList.push(result);
            $scope.status = result + ' has been added to the guest list';
          }, function() {
            $scope.status = 'You didn\'t add a guest';
          });
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
     "details": $scope.details,
     "favicon" : "favorite_border",
     "guests": $scope.guestList,
     "guestNumber": $scope.guestNumber
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
   $scope.guestList = [];
   $scope.eventForm.$setPristine();
   $scope.eventForm.$setUntouched();
  }
//delete cards with trash icon
  $scope.remove = function(card) {
    $scope.idx = $localStorage.eventCards.indexOf(card);
    $localStorage.eventCards.splice($scope.idx, 1);
    };
}]);
