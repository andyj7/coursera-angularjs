(function () {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.displayMessage = "";

    $scope.checkIfTooMuch = function (){
      if ($scope.lunchList){
        var totalItems = calculateNumberOfItems($scope.lunchList);
        if (totalItems < 4 ) {
          $scope.displayMessage= "Enjoy!";
        }
        else {
          $scope.displayMessage= "Too much!";
        }
      }
      else {
        $scope.displayMessage= "Please enter data first";
      }
    };

    function calculateNumberOfItems(list) {
      var totalItems = 0;
      totalItems = list.split(",").length ;
      return totalItems;
    }
  }
})();
