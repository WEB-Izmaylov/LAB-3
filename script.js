(function () {
  'use strict';

  angular.module('LAB', []).controller('LABController', LABController);

  function LABController($scope) {
    $scope.breakfast = function() {
      if ($scope.products) {
        var productsArray = $scope.products.split(',');
        var productsCount = 0;
        productsArray.forEach(element => {
          element = element.trim();
          if (element) {
            productsCount++;
          }
        });
        if (productsCount > 3) {
          $scope.note = 'Це забагато!';
        } else {
          $scope.note = 'На здоров’я!';
        }
      } else {
        $scope.note = 'Будь ласка, уведіть дані!';
      }
    };
  }
})();
