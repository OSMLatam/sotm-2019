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

$('.play-button').on('click', function () {
  $(this).hide();
  $(this).parent().fadeOut();
  $(this).parent().siblings('.slider-video')[0].play();
});

$('.slider-video').on('play', function () {
  $(this).attr('controls', '1');
});

// Additionnal code for the slider
var pos = 0,
  slides = $('.slide'),
  numOfSlides = slides.length;

function nextSlide(){
  stopCurrentVideo();
  slides.eq(pos).animate({left:'-100%'},500);
  pos = pos >= numOfSlides-1 ? 0 : ++pos;
  slides.eq(pos).css({left:'100%'}).animate({left:0},500);
}

function previousSlide(){
  stopCurrentVideo();
  slides.eq(pos).animate({left:'100%'},500);
  pos = pos == 0 ? numOfSlides-1 : --pos;
  slides.eq(pos).css({left:'-100%'}).animate({left:0},500);
}

function stopCurrentVideo(){
  $('.slider-video:eq('+pos+')').load().removeAttr('controls')
  .siblings('.overlay-content').show().find('.play-button').show();
}

$('.left').click(previousSlide);
$('.right').click(nextSlide);


