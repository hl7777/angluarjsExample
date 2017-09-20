(function () {
    'use strict',
    angular.module('app').directive('productTable', ['$http', '$timeout','$http', function ($http, $timeout, $http) {
        return {
            restrict: 'E',
            scope: {
                products: '=',
                delete: '&'
            },
            templateUrl: '/scripts/app/product/productDirective.html',
            link: function (scope, element, attrs) {
                //console.log({ products:scope.products });
                //scope.delete = function (product) {
                //    console.log(product);
                //    scope.products.splice(0, 1);
                //}

                scope.editProduct = {};
                var url = '/api/product';

                //scope.products.map(function (p) {
                //    scope.editBtnName[p.id] = 'Edit';
                //});

                scope.$watch(function () {
                    return scope.products;
                }, function (oldVal, newVal) {
                    if (oldVal.length > 0) {
                        scope.products.map(function (p) {
                            scope.editProduct['p' + p.id] = {};
                            scope.editProduct['p' + p.id].btnText = 'Edit';
                            scope.editProduct['p' + p.id].name = p.name;
                        });
                    }
                    //console.log({ products1: scope.products, edit: scope.editBtnName, newVal: oldVal });
                })

                console.log({ products: scope.products, edit: scope.editProduct });

                scope.edit = function (product) {
                    if (product.canSave) {
                        product.canSave = false;
                        scope.editProduct['p' + product.id].btnText = 'Saving';
                        $http.put(url, product).then(function (data) {
                            console.log(data);
                        }).catch(function (response) {
                            console.log(response);
                        })

                        scope.editProduct['p' + product.id].btnText = 'Edit';
                        product.isEdit = false;
                    } else {
                        product.canSave = true;
                        scope.editProduct['p' + product.id].btnText = 'Save';
                        product.isEdit = true;
                        setFocus(product);
                    }
                    //console.log({ element: element, attrs: attrs,productisEdit:product.isEdit });
                    
                    
                    //console.log(product);
                }

                scope.blur = function (product) {
                    console.log(product);
                    product.isEdit = false;

                    if (scope.editProduct['p' + product.id].name != product.name) {
                        scope.editProduct['p' + product.id].btnText = 'Save';
                        product.canSave = true;
                    } else {
                        scope.editProduct['p' + product.id].btnText = 'Edit';
                        product.canSave = false;
                    }
                }

                scope.active = function (product) {
                    product.isEdit = true;
                    setFocus(product);
                }

                function setFocus(product) {
                    $timeout(function () { document.getElementById('product' + product.id).focus(); }, 100);

                    //scope.$watch(function () {
                    //    return product.isEdit;
                    //}, function (oldVal, newVal) {
                    //    if (oldVal == true && newVal == true) {
                    //        var name = document.getElementById('product' + product.id);
                    //        if(name!=null){
                    //            name.focus();
                    //        }
                    //    }
                    //})
                }

            }
        }
    }]);
})()
