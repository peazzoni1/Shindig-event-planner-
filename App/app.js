var eventApp = angular.module('eventApp', ['ngRoute', 'ngResource', 'auth0', 'ngStorage', 'angular-storage', 'angular-jwt','ngMaterial', 'door3.css', 'google.places'])
.config(function (authProvider, $httpProvider, $locationProvider, $mdThemingProvider) {
  //config for Auth0
  authProvider.init({
    domain: 'verifyusers.auth0.com',
    clientID: '2x9gjXvaF6DPh3O1Ac43BZXzwdzUthIx',
    callbackURL: location.href,
    loginUrl: '/login'
  });

  //MD theme config
  $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('light-blue')
      .backgroundPalette('grey')
      .dark();

  $mdThemingProvider.theme('light-blue', 'default')
      .primaryPalette('light-blue')
      .backgroundPalette('grey')
  })
.run(function(auth, store, $rootScope, $location, jwtHelper){

  $rootScope.$on('$routeChangeStart', function() {
      var token = store.get('token');
        console.log(token);
    });

});
