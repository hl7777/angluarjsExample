(function () {
    'use strict',
    describe('productController', function () {
        beforeEach(module('app'));

        var $controller;

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        describe('$scope.init', function () {
            var $scope, controller;

            beforeEach(function () {
                $scope = {};
                controller = $controller('productController', { $scope: $scope });
            });

            it('get products after init', function () {
                $scope.init();
                expect($scope.products.length).toBeGreaterThan(0);
            });
        });
    })
})()

