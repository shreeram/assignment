'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    // it('should ....', inject(function($controller) {
    //   //spec body
    //   var view1Ctrl = $controller('View1Ctrl');
    //   expect(view1Ctrl).toBeDefined();
    // }));

    it('should nextGeneration', inject(function($controller, $rootScope ) {
      //spec body

      var scope = $rootScope.$new();
      var view1Ctrl = $controller('View1Ctrl',{ $scope: scope });

      var array1 = [];
      var array2 = [];
      scope.clear(array1);
      scope.clear(array2);
      array1[3][3] = true;
      array1[3][4] = true;
      array1[3][5] = true;
      scope.nextGeneration(array1, 8, 6);

      expect(scope.output[3][4]).toBeTruthy();
      expect(scope.output[2][4]).toBeTruthy();
      expect(scope.output[4][4]).toBeTruthy();
    }));

    it('should nextGeneration', inject(function($controller, $rootScope ) {
      //spec body

      var scope = $rootScope.$new();
      var view1Ctrl = $controller('View1Ctrl',{ $scope: scope });

      var array1 = [];
      var array2 = [];
      scope.clear(array1);
      scope.clear(array2);
      array1[2][2] = true;
      array1[2][3] = true;
      array1[3][2] = true;
      array1[3][3] = true;

      scope.nextGeneration(array1, 8, 6);

      expect(scope.output[2][2]).toBeTruthy();
      expect(scope.output[2][3]).toBeTruthy();
      expect(scope.output[3][2]).toBeTruthy();
      expect(scope.output[3][3]).toBeTruthy();
    }));

    it('should clear', inject(function($controller, $rootScope ) {
      //spec body

      var scope = $rootScope.$new();
      var view1Ctrl = $controller('View1Ctrl',{ $scope: scope });

      var array1 = [];
      array1[0] = [true];
      scope.clear(array1);
      expect(array1[0][0]).toBeFalsy();

    }));

  });
});
