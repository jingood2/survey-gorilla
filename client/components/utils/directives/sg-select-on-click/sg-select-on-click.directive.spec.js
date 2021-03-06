'use strict';

describe('Directive: sgSelectOnClick', function () {

  // load the directive's module
  beforeEach(module('surveyGorillaApp'));

  var element,
    scope;

  beforeEach(function(){
    beforeEach(module('surveyGorillaApp'));
  })

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sg-select-on-click></sg-select-on-click>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sgSelectOnClick directive');
  }));
});
