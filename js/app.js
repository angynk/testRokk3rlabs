'use strict';
var app = angular.module('dash', ['ui.bootstrap', 'ui.router', 'ngCookies','ngCookies']);
app.service('globalService', [ '$rootScope', '$cookieStore' ,
    function ($rootScope , $cookieStore) {
    this.Data = {
        showSettings: 'false'
    };
    this.UserData = {
        userId: 0,
        userName: 'Nataly Melo',
        apiKey: 'invalidApi'
    };
    this.getAll = function () {
        return this.Data;
    };
    this.getUserData = function (){
        return this.UserData;
    };

    this.getLineData = function(){
        return this.lineData;
    };

        this.getPieData = function(){
            return this.pieData;
        };

    this.lineData = {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Live Speed Zones'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Km'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Calle 85',
            data: (function () {
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    };

    var randomSpeed = function () {

    };
    this.barData  = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Count By Zone'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Number of Cars'
            }
        } ,
        series : [{
            name: 'Cars',
            data: []
        }]

    };
    this.pieData = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Speed Average'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: []
        }]

    };

    this.processData = function (){

        var categories = [];
        var data = [];
        var pieData = [];
        for (var i = 0; i < this.activityData.length; i++) {
            categories.push(this.activityData[i].zoneId);
            data.push(this.activityData[i].data.count);
            pieData.push({
                name: this.activityData[i].zoneId,
                y: this.activityData[i].data.speed
            })
        }

        //Adjust bar Data
        this.barData.xAxis.categories = categories;
        this.barData.series[0].data = data;

        //Adjust pieData
        this.pieData.series[0].data = pieData;
    };

    this.activityData = [
        {zoneId:"Calle 85", data:{count:1,speed:10,time:1466781876681}},
        {zoneId:"Salitre plaza", data:{count:2,speed:8.5,time:1466781876681}},
        {zoneId:"Parque 93", data:{count:4,speed:15,time:1466781876681}},
        {zoneId:"Calle 80", data:{count:3,speed:13.5,time:1466781876681}},
        {zoneId:"Centro", data:{count:1,speed: 9 ,time:1466781876681}}
    ];

        this.getBarData = function () {
            return this.barData;
        };


        this.updateData = function () {
            var time =(new Date()).getTime();
            for (var i = 0; i < this.activityData.length; i++) {
                this.activityData[i].data.count = Math.random();
                this.activityData[i].data.speed = Math.random();
                this.activityData[i].data.time = time * 1000;
            }
        }

}]);

