'use strict';
app.controller('dashboardController', ['$scope','$location','$http','$window','$timeout','globalService',
    function ($scope,$location,$http,$window,$timeout,globalService) {
        $scope.User = globalService.getUserData();
        globalService.processData();


        Highcharts.chart('container', globalService.getLineData());

        Highcharts.chart('bar-container', globalService.getBarData());


        Highcharts.chart('pie-container', globalService.getPieData());


    }]);
