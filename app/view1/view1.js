'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', ['$scope', function($scope) {
    $scope.column = 9;
    $scope.row = 7;

    $scope.getNumber = function(number)
    {
      return new Array(number);
    };
    $scope.clear = function(array)
    {
      for(var i=0;i<=$scope.column;i++)
      {
        // initialize empty array
        array[i] = [];
        for(var j=0;j<=$scope.row;j++)
        {
          array[i][j] =false;
        }
      }
    };
    // flip cell for die or alive
    $scope.toggleCell = function(i, j)
    {
      $scope.input[i][j] = !$scope.input[i][j];
    };

    $scope.nextGeneration = function(input, M, N) {

      // to use for loop for finding neighbours index start from 1 to lenght -1
      for (var l = 1; l <= M - 1; l++) {
        for (var m = 1; m <= N - 1; m++) {

          // finding the live 8 neighbours
          var aliveNItems = 0;
          for (var i = -1; i <= 1; i++)
            for (var j = -1; j <= 1; j++)
            {
              aliveNItems += (input[l + i][m + j] ? 1 : 0);
            }
          // remove current item count
          aliveNItems -= (input[l][m] ? 1 : 0);

          // dieing because of under population
          if ((input[l][m]) && (aliveNItems < 2))
            $scope.output[l][m] = false;
          // dieing because of over population
          else if ((input[l][m]) && (aliveNItems > 3))
            $scope.output[l][m] = false;
          // cell birth
          else if ((!input[l][m]) && (aliveNItems == 3))
            $scope.output[l][m] = true;
          // next generation alive cells
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
