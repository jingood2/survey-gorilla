'use strict';

describe('Service: storageService', function () {

  // load the service's module
  beforeEach(module('surveyGorillaApp'));

  // instantiate service
  var storageService;
  /*
  beforeEach(inject(function (_storageService_) {
    storageService = _storageService_;
  }));
  */

  beforeEach(inject(function ($injector) {
    storageService = $injector('storageService');
    //storageService = _storageService_;
  }));

  it('should exist', function () {
    expect(!!storageService).toBe(true);
  });

  it('should do setValue & getValue', function() {
    storageService.setValue('user-token','abcdefg123');
    expect(storageService.getValue('user-token')).toEqual('abcdefg123');
    storageService.flush();
  });

  it('should do removable', function() {
    storageService.setValue('user-token','abcdefg123');
    expect(storageService.getValue('user-token')).toEqual('abcdefg123');
    storageService.removeValue('user-token');
    expect(storageService.getValue('user-token')).toBe(null);
  });

  it('should do setTTL',function(done){
    storageService.setValue('user-token','abcdefg123');
    expect(storageService.getValue('user-token')).toEqual('abcdefg123');
    jstorageService.setTTL('user-token',1000);
    expect(storageService.getValue('user-token')).toBe('abcdefg123');
    setTimeout(function(){
      expect(storageService.getValue('user-token')).toBe(null);
      done();
    },2000);

  })

});
