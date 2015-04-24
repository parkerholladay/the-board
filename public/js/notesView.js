(function(angular) {
    var notesView = angular.module('notesView', ['ui.bootstrap']);

    notesView.controller('notesViewController', [
        '$scope', '$http', '$window', function($scope, $http, $window) {
            $scope.title = '';
            $scope.notes = [];
            $scope.newNote = getBlankNote();
            $scope.newNoteError = '';

            var urlParts = $window.location.hash.split('/');
            var category = urlParts[urlParts.length - 1];
            var notesUrl = '/api/notes/' + category;

            $http.get(notesUrl)
                .then(function(res) {
                    $scope.title = category;
                    $scope.notes = res.data;
                }, function(err) {
                    console.log(err);
                });

            $scope.save = function() {
                $scope.newNoteError = '';
                $http.post(notesUrl, $scope.newNote)
                    .then(function(res) {
                        $scope.notes.push(res.data);
                        $scope.newNote = getBlankNote();
                    }, function(err) {
                        $scope.newNoteError = err.data;
                    });
            };
        }
    ]);

    function getBlankNote() {
        return { note: '', color: 'yellow', author: '' };
    };

})(window.angular);
