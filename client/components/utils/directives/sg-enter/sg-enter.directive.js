(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .directive('sgEnter', SgEnter);

  /* @ngInject */
  function SgEnter() {

    /*
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the sgEnter directive');
      }
    };
    */

    return function(scope,element,attrs) {
      element.bind("keydown keypress", function(event){
        if(event.which == 13) {
          scope.$apply(function(){
            scope.$eval(attr.ngEnter);
          });
        }
        event.preventDefault();
      })
    }
  }

})();
