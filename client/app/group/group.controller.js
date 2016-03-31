(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .controller('GroupListCtrl', GroupListCtrl)
    .controller('GroupViewCtrl', GroupViewCtrl)
    .controller('GroupCreateCtrl', GroupCreateCtrl)
    .controller('GroupEditCtrl', GroupEditCtrl);

  /* @ngInject */
  function GroupListCtrl($scope, $window, $log, Group) {

    // entire group list, Get Method /api/groups request
    $scope.groups = Group.query();

    $scope.deleteGroup = function(group) {

      group.$delete(function(group){
        $window.localtion.href = '';
      });
    };

  }

  /* @ngInject */
  function GroupViewCtrl($scope,$stateParams, Group,$log) {

    $scope.group = Group.get({id: $stateParams.id});

  }

  /* @ngInject */
  function GroupCreateCtrl($scope, $state, $stateParam, Group, $log) {

    $scope.group = new Group();

    $scope.createGroup = function() {
      $scope.group.$save(function(){
        $state.go('groups'); // group 관리 화면으로 이동
      });
    };

  }

  /* @ngInject */
  function GroupEditCtrl($scope,$state, $stateParams,Group, $log) {

    $scope.updateGroup = function() {

      $scope.group.$update(function(){
        $state.go('groups');
      });

    };

    // reflesh
    $scope.group = Group.get({id: $stateParams.id});

  }


})();
