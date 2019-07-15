(function () {
  'use strict';

  var App = angular.module("App", []);

  App.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  });

  App.controller('sotm', ['$scope', '$http', function ($scope, $http) {
    $http.get('/js/sotmprogram.json').then(function(json_f) {
      $scope.countries = json_f.data.countries;
      $scope.days = json_f.data.days;
      $scope.locations = json_f.data.locations;
      $scope.speakers = json_f.data.speakers;
      $scope.talks = json_f.data.talks;
      $scope.types = json_f.data.types;
    });

    $scope.get_country = function(id) {
      return $scope.countries[id - 1];
    };
    $scope.get_day = function(id) {
      return $scope.days[id - 1];
    };
    $scope.get_location = function(id) {
      return $scope.locations[id - 1];
    };
    $scope.get_speaker = function(id) {
      return $scope.speakers[id - 1];
    };
    $scope.get_speakers = function(activity_id) {
      return $scope.speakers[id - 1];
    };
    $scope.get_talk = function(id) {
      return $scope.talks[id - 1];
    };
    $scope.get_type = function(id) {
      return $scope.types[id - 1];
    };
  }]);
})();
