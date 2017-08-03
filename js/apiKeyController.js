'use strict';

app.controller('AccessKeyController',[ '$scope','$http','$location','$window','apiData','globalService',
    function($scope, $http,$location,$window,apiData,globalService) {
    $scope.apiKey = "";
    $scope.dateCreation = "";
    $scope.status = "";
    var userData = globalService.getUserData();
    var apiKey = apiData.data;

    if( apiKey.api_key == '0' ){
        $scope.showApiKey = 'false';
    }else{
        var date = new Date(apiKey.date_creation);
        $scope.showApiKey = 'true';
        $scope.apiKey = apiKey.api_key;
        $scope.dateCreation = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
        $scope.status = apiKey.status;
    }
    $scope.requestApiKey = function() {

        var response = $http.post('requestForAPIkey',userData.userId
        ).success(function(responseData) {
            var date = new Date(responseData.date_creation);
            $scope.showApiKey = 'true';
            $scope.apiKey = responseData.api_key;
            $scope.dateCreation = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
            $scope.status = responseData.status;
        });

        response.error(function (responseData) {
            console.log( "Exception details: " + JSON.stringify({data: data}));
            $location.path('/errorScreen');
        });

    }
    $scope.regenerateApiKey = function() {
        var response = $http.post('regenerateAPIkey',userData.userId
        ).success(function(responseData) {
            var date = new Date(responseData.date_creation);
            $scope.showApiKey = 'true';
            $scope.apiKey = responseData.api_key;
            $scope.dateCreation = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
            $scope.status = responseData.status;
        });

        response.error(function (responseData) {
            console.log( "Exception details: " + JSON.stringify({data: data}));
            $location.path('/errorScreen');
        });
    }

}]);

