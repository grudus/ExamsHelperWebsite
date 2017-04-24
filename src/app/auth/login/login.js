require("./login.html");

class Login {
    /*@ngInject*/
    constructor(Authorization, $state) {
        window.console.log("Login");
        this.Authorization = Authorization;
        this.$state = $state;
    }

    login() {
        window.console.log("logging in!");
        this.Authorization.login({});
        this.$state.go("app.user");
    }
}

export default {
    controller: Login,
    templateUrl: "login.html"
}