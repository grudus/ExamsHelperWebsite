angular.module("ExamsHelperApp-login", [])
    .controller("appName", function ($scope) {
        $scope.appName = "ExamsHelper";
    })
    .controller("singInForm", function ($scope, $http) {
        var instance = this;
        this.token = "";

        $scope.tryToSignIn = function () {
            if ($scope.username == "" || $scope.password == "") {
                alert("Cannot login");
            }
            else {
                $http({
                    url: "http://localhost:8080/api/auth/login",
                    method: "POST",
                    headers: {withCredentials: true},
                    params: {'username': $scope.username, 'password': $scope.password}
                }).success(function (data, status, headers) {
                    instance.token = headers()["x-auth-token"];
                    instance.getInfo();
                }).error(function (error) {
                    console.log("error " + JSON.stringify(error));
                })
            }
        };

        this.getInfo = function () {
            $http.get("http://localhost:8080/api/user", {headers: {"x-auth-token": instance.token}})
                .success(function (data) {
                    console.log(data);
                })
        }


    });




