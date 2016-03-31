(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .directive('sgFormatter', SgFormatter);

  /* @ngInject */
  function SgFormatter() {
    /*
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the sgFormatter directive');
      }
    };
    */

    this.percentFormat = function(value) {
      if(value && !isNaN(value)) {
        return numeral(value).format('0,0.[0]');
      } else {
        return '0';
      }
    };

    this.integerFormat = function(value) {
      if(value && !isNaN(value)){
        return numeral(value).format('0');
      }else {
        return '0';
      }
    };


  }

})();
