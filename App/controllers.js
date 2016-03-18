eventApp.controller('MainCtrl', ['$scope', 'auth', 'store', '$localStorage', '$location','$rootScope', '$mdDialog', '$mdSidenav', function ($scope, auth, store, $localStorage, $location, $rootScope, $mdDialog, $mdSidenav) {
    $scope.auth = auth;
    $scope.guestList = [];
    $scope.eventCards = $localStorage.eventCards;

    // logout of app
    $scope.logOut = function () {
          auth.signout();
          store.remove('profile');
          store.remove('token');
          $location.path('/login');
    }

    // Sidenav toggle
      $scope.toggleSidenav = function(MenuId) {
        $mdSidenav(MenuId).toggle();
      }

    //show & hide search bar
    $scope.toggleSearch = function() {
          $scope.showSearch = !$scope.showSearch;
    }
    //turn on favorite icon
    $scope.favorite = function(card) {
        card.favicon = "favorite";
    }
    // filter cards by favorites
    $scope.showFavorites;
    $scope.getFavorites = function(card) {
      if(card.favicon === "favorite") {
        return card;
      }
    }
    // clear filter
    $scope.getAllCards = function() {
      $scope.showFavorites = " ";
    }
    // add new guest prompt
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
       $scope.guestNumber = "";
       $scope.status - "";
       $scope.eventForm.$setPristine();
       $scope.eventForm.$setUntouched();
      }
    //delete cards with trash icon
      $scope.remove = function(card) {
        $scope.idx = $localStorage.eventCards.indexOf(card);
        $localStorage.eventCards.splice($scope.idx, 1);
        };
    }]);
