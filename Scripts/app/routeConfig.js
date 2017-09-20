(function () {
    'use strict',
    angular.module('app').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/app/product/products.html',
            controller: 'productController'
        })
        //optional id(?)
        .when('/product/:id?', {
            templateUrl: 'scripts/app/product/productsTest.html'
        })
        .otherwise({
            template:'<h1>No selected</h1>'
        })
    }])
})()
