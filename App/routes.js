eventApp.config(function($routeProvider) {

    $routeProvider

    .when('/login', {
      templateUrl: 'Login/login.html',
      controller: 'LoginCtrl',

    })

    .when('/', {
      templateUrl: 'Pages/events.html',
      controller: 'MainCtrl',
      css: 'Styles/events.css',
      requiresLogin: true

    })

});
