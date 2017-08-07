var shareBike = angular.module("shareBike", ["ngRoute", "ui.bootstrap"]);

shareBike.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/mainPage.html",
        controller: "mainCtrl" 
    })
})