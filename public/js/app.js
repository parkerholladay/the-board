(function() {
    var theBoard = angular.module('theBoard', ['ngRoute', 'categoriesView', 'notesView']);

    theBoard.config([
        '$routeProvider', function($routeProvider) {
            $routeProvider.when('/notes', {
                    templateUrl: '/partials/categories.html',
                    controller: 'categoriesViewController'
                }).when('/notes/:category', {
                    templateUrl: '/partials/notes.html',
                    controller: 'notesViewController'
                }).otherwise({
                    redirectTo: '/notes'
                });
        }
    ]);

})(angular.window);
