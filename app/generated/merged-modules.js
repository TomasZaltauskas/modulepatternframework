!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(1),r(2)},function(t,e){!function(){"use strict";angular.module("modulePatternApp",["ui.router","view1"]).config(["$locationProvider","$stateProvider",function(t,e){e.state("view1",{url:"/",templateUrl:"view1/view1.html",controller:"view1.ctrl"}),t.html5Mode(!0)}])}()},function(t,e){!function(){"use strict";angular.module("view1",[]).controller("view1.ctrl",["$scope",function(t){}])}()}]);