eventApp.config(function($routeProvider) {

    $routeProvider

    .when('/login', {
      templateUrl: 'App/Login/login.html',
      controller: 'LoginCtrl',

    })

    .when('/', {
      templateUrl: 'App/Pages/events.html',
      controller: 'MainCtrl',
      css: 'App/Styles/events.css',
      requiresLogin: true
    })

});
