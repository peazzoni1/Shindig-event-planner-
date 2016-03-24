var eventApp = angular.module('eventApp', ['ngRoute', 'ngResource', 'auth0', 'ngStorage', 'angular-storage', 'angular-jwt','ngMaterial', 'ngMessages', 'door3.css', 'google.places'])
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

  $mdThemingProvider.theme('pink', 'default')
    .primaryPalette('pink')
    .accentPalette('light-blue')
    .dark();

  $mdThemingProvider.theme('light-blue', 'default')
      .primaryPalette('light-blue')
      .backgroundPalette('grey')
  })
.run(function(auth, store, $rootScope, $location, jwtHelper){
 //keep user logged in on page refresh
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    console.log(token);
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
});
});
