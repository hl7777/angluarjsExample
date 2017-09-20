(function () {
    'use strict',
    angular.module('app').controller('productController', ['$scope', 'productService', '$http', '$routeParams',
                    function ($scope, productService, $http, $routeParams) {
        var url = '/api/product';
        $scope.name = 'test name';
        $scope.id = '';
        $scope.products = [];

        $scope.init = function () {
            console.log('init');
            //$http.get(url).then(function (data) {
            //    console.log(data);
            //    $scope.products = data;
            //}).catch(function (response) {
            //    console.log({ error: response });
            //})
            //$http.get(url).then(function success(data) {
            //    console.log(data);
            //    $scope.products = data;
            //}, function error(response) {
            //    console.log({ error: response });
            //})

            if ($routeParams.id) {
                $scope.id = $routeParams.id
            }

            productService.getProducts(url).then(function (data) {
                //console.log(data);
                $scope.products = data.data;
            }).catch(function (response) {
                //console.log({ error: response });
            })
        }

        $scope.add = function () {
            console.log($scope.form.$valid);
            var newPoduct = { name: $scope.name };
            $http.post(url, newPoduct).then(function (data) {
                //console.log(data);
                $scope.products.push(data.data);
            }).catch(function (response) {

            });
        }

        $scope.delete = function (product) {
            //console.log(product);
            //product.name = 'updated';
            
            $http.delete(url+'/'+product.id ).then(function (data) {
                var index = $scope.products.indexOf(product);
                $scope.products.splice(index, 1);
                //console.log({ products: $scope.products, index: index, data: data });
            }).catch(function (response) {
            })
            
        }
    }])
})()
