'use strict';
app.controller('DashController', ['$scope','globalService','$location',
    function ($scope,globalService,$location) {
        //globalService.ClearCredentials();
        $scope.user = null;
        $scope.Data = globalService.getAll();
        $scope.User = globalService.getUserData();
        $scope.redirect = function(){
            window.location = "#/html/page.html";
        }

    }]);