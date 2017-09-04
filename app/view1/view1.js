'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', ['$scope', function($scope) {
    $scope.column = 8;
    $scope.row = 6;

    $scope.getNumber = function(number)
    {
      return new Array(number);
    };
    $scope.clear = function(array)
    {
      for(var i=0;i<$scope.column;i++)
      {
        array[i] = [];
        for(var j=0;j<$scope.row;j++)
        {
          array[i][j] =false;
        }
      }
    };
    $scope.toggleCell = function(i, j)
    {
      $scope.input[i][j] = !$scope.input[i][j];
    };

    $scope.nextGeneration = function(input, M, N) {


      for (var l = 1; l < M - 1; l++) {
        for (var m = 1; m < N - 1; m++) {
          var aliveNItems = 0;
          for (var i = -1; i <= 1; i++)
            for (var j = -1; j <= 1; j++)
            {
              aliveNItems += (input[l + i][m + j] ? 1 : 0);
            }

          aliveNItems -= (input[l][m] ? 1 : 0);

          if ((input[l][m]) && (aliveNItems < 2))
            $scope.output[l][m] = false;

          else if ((input[l][m]) && (aliveNItems > 3))
            $scope.output[l][m] = false;

          else if ((!input[l][m]) && (aliveNItems == 3))
            $scope.output[l][m] = true;

          else
            $scope.output[l][m] = input[l][m];
        }
      }
    };


    // initialize the input array
    $scope.input = [];
    $scope.output = [];
    $scope.clear($scope.input);
    $scope.clear($scope.output);
  }]);
