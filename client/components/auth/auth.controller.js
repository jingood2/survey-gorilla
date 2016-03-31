(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .controller('AuthCtrl', AuthCtrl);

  /* @ngInject */
  function AuthCtrl($scope, $log, $location, Auth) {

    Auth.loginOAuth(function() {
      $location.path('/');
    })

  }

})();
