var shareBike = angular.module("shareBike", ["ngRoute", "ui.bootstrap"]);

shareBike.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/mainPage.html",
        controller: "mainCtrl" 
    })
    .when("/second_page", {
        templateUrl: "views/secondPage.html",
        controller: "mainCtrl" 
    })
    .when("/third_page", {
        templateUrl: "views/thirdPpage.html"
         
    })
    .when("/fourth_page", {
        templateUrl: "views/fourthPpage.html"
         
    })
})