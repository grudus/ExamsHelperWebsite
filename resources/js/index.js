angular.module("ExamsHelperApp", ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider) {
            $routeProvider

                .when('/', {
                    template: '<div>This should be visible:{{ ctrl.one }}</div><div>This should not:{{ one }}</div>',
                    controller: 'Ctrl',
                    controllerAs: 'ctrl'
                });
        }])
    .controller('Ctrl', function ($scope) {
        var ctrl = this;
        ctrl.one = 'actual';
    });



