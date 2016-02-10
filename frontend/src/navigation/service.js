natal.service('NavigationService', ['$location', function ($location) {
    return {
        gotoInscription: function () {
            this._navigate('/Inscription');
        },
        gotoShowTableList: function () {
           this._navigate ('/Tables');
        },
        _navigate: function (path) {
            $location.path(path);
        }
    }
}]);