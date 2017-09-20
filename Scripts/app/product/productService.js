(function () {
    'use strict',
    angular.module('app').service('productService', ['$http', function ($http) {
        var self = this;
        var url = '/api/product';
        self.getProducts = function () {            
            return $http.get(url);
            //    .then(function success(response) {
            //    console.log(response);
            //    return response.data;
            //}
            //, function failed(response) {
            //    throw response;
            //}
            //);
        }

        self.create = function (product) {
            return $http.post(url).then(function success(response) {
                return response.data;
            }
            //, function failed(response) {
            //    throw response;
            //}
            );
        }
    }])
})()
