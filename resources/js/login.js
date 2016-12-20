function init() {
    const app = angular.module("ExamsHelperApp-login", []);

    app.controller("appName", function ($scope) {
        $scope.appName="ExamsHelper"
    });
}

init();