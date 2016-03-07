(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .factory('group', GroupFactory);

  /* @ngInject */
  function GroupFactory($http,$q) {

		/* constructor */
		function Group(groupData) {
			if(groupData) {
				this.setData(groupData);
			}
		}

		Group.prototype = {

			setData: function(groupData) {
				angular.extend(this, groupData);
			},

			load: function(id) {
				var self = this;
				var deferred = $q.defer();

				$http
						.get('api/v1/groups/' + id)
						.success(function(groupData) {
							self.setData(groupData);
							deferred.resolve(groupData);
						})
						.error(function() {
							deferred.reject();
						});

				return deferred.promise;

			},

      delete: function(id) {
        $http.delete('api/v1/groups/' + id);
      },

      update: function(id) {
        $http.put('/api/v1/groups/' + id, this);
      },

      isMembers: function() {
        if(!this.group.members || this.group.members.length ===0) {
          return false;
        }

        return true;
      }

		} // prototype

    return Group;

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
  } // groupFactory

})();
