natal.controller('MenuController', ['$scope', 'NavigationService', '$mdSidenav', function ($scope, NavigationService, $mdSidenav) {
    $scope.onClickNewInscriptionButton = function () {
        NavigationService.gotoInscription();
        $mdSidenav('leftMenu').toggle();
    }
    
    $scope.onClickShowTableListButton = function () {
        NavigationService.gotoShowTableList();
        $mdSidenav('leftMenu').toggle();
    }
}]);