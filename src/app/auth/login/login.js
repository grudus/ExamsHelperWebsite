require("./login.html");

class Login {
    /*@ngInject*/
    constructor(Authorization, $state) {
        window.console.log("Login");
        this.Authorization = Authorization;
        this.$state = $state;
    }

    login() {
        this.Authorization.login({username: this.username, password: this.password},
            () => {console.log("loggedIn")}, () => console.log("error"))
    }
}

export default {
    controller: Login,
    templateUrl: "login.html"
}