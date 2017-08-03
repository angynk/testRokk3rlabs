'use strict';
app.controller('dashboardController', ['$scope','$location','$http','$window','$timeout','globalService',
    function ($scope,$location,$http,$window,$timeout,globalService) {
        $scope.User = globalService.getUserData();
        globalService.processData();
console.log(globalService.getBarData());


        // // Function to replicate setInterval using $timeout service.
        // $scope.intervalFunction = function(){
        //     $timeout(function() {
        //         $scope.getData();
        //         $scope.intervalFunction();
        //     }, 1000)
        // };
        //
        // // Kick off the interval
        // $scope.intervalFunction();

        Highcharts.chart('container', globalService.getLineData());

        Highcharts.chart('bar-container', globalService.getBarData());


        Highcharts.chart('pie-container', globalService.getPieData());


    }]);
