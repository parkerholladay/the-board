(function(angular) {
    var categoriesView = angular.module('categoriesView', ['ui.bootstrap']);

    categoriesView.controller('categoriesViewController', [
        '$scope', '$http', '$window', function($scope, $http, $window) {
            $scope.title = 'The Board';
            $scope.categories = [];
            $scope.newCategory = getBlankCategory();
            $scope.newCategoryError = '';

            var categoryUrl = '/api/categories';

            $http.get(categoryUrl).then(function(res) {
                $scope.categories = res.data;
            }, function(err) {
                //TODO
                console.log('Error loading data ' + err);
            });

            $scope.save = function() {
                $scope.newCategoryError = '';
                $http.post(categoryUrl, $scope.newCategory)
                    .then(function(res) {
                        $window.location.href += '/' + res.data.id;
                    }, function(err) {
                        $scope.newCategoryError = err.data;
                    });
            };
        }
    ]);

    function getBlankCategory() {
        return { name: '' };
    }

})(window.angular);
