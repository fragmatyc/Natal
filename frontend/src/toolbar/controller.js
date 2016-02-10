natal.controller('ToolbarController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.toggleMenu = function () {
        $mdSidenav('leftMenu').toggle();
    }
}]);