(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .directive('sgSelectOnClick', SgSelectOnClick);

  /* @ngInject */
  function SgSelectOnClick() {
    /*
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the sgSelectOnClick directive');
      }
    };
    */

    return {
      restrict: 'A',
      link: function(scope,element,attrs) {
        element.on('click', function(){
          this.select();
        })
      }
    }
  }

})();
