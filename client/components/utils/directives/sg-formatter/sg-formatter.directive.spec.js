'use strict';

describe('Directive: sgFormatter', function () {

  // load the directive's module
  beforeEach(module('surveyGorillaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sg-formatter></sg-formatter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sgFormatter directive');
  }));
});