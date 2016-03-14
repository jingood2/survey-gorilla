(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .factory('Group', Group);

  /* @ngInject */
  function Group($resource) {
    return $resource('/api/v1/groups/:id', {id: '@_id'},{
      'update': {
        method: 'PUT'
      }
    });
  }


    /*
    // Service logic
    // ...

    var meaningOfLife = 99;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
    */

})();
