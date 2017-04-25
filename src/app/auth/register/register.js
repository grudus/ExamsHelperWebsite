require("./register.html");

class Register {
    /*@ngInject*/
    constructor(Authorization, $state) {
        window.console.log("Register");
        this.Authorization = Authorization;
        this.$state = $state;
    }

}

export default {
    controller: Register,
    templateUrl: "register.html"
}