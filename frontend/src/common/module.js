var natal = angular.module("Natal", ['ngMaterial', 'ngRoute']);
natal.config(['$mdThemingProvider', '$routeProvider', function($mdThemingProvider, $routeProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('red');

    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: "HomeController"
        })
        .when('/Inscription', {
            templateUrl: 'tmpl/inscription.html',
            controller: "InscriptionController"
        })
        .when('/Tables', {
            templateUrl: 'tmpl/tables.html',
            controller: "TablesController"
        })
        .otherwise({ redirectTo: '/' });
}]);