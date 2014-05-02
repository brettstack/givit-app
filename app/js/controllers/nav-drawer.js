'use strict';

angular.module('givitApp')
  .controller('NavDrawerCtrl', function ($scope, $rootScope, $location, User, App) {
    $scope.user = User.$storage.userDetails;

    $scope.$on('givitListSearch.show', function hideNavDrawer() {
      $scope.hideNavDrawer();
    });

    $scope.currentRouteIs = function (routes) {
      return App.currentRouteIs(routes);
    };

    $scope.showNavDrawer = function () {
      $rootScope.$broadcast('navDrawer.show');
    };

    $scope.hideNavDrawer = function () {
      $rootScope.$broadcast('navDrawer.hide');
    };

    $scope.redirectIfNoUserMinimalDetails = function ($event) {
      if (!User.hasMinimalDetails()) {
        $location.path('/user-details');
        $event.preventDefault();
      }
    };
  });