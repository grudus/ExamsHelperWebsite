function init() {
    const app = angular.module("ExamsHelperApp", []);

    app.controller("appName", function ($scope) {
        $scope.appName = "ExamsHelper"
    });

}

init();



function User() {
    this.token = null;

    this.setToken = function (token) {
        this.setToken = token;
    }
}