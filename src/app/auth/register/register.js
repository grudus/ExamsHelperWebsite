require("./register.html");

class Register {
    /*@ngInject*/
    constructor(Authorization, $state,  UserService) {
        this.Authorization = Authorization;
        this.$state = $state;
        this.UserService = UserService;
        this.modalShown = false;
    }

    emailExists(email) {
        return  this.UserService.exists({email: email}).$promise
    }

    usernameExists(username) {
        return  this.UserService.exists({username: username}).$promise
    }

    register() {
        this.modalShown = true;
    }

    dupa() {
        window.console.log("dupa");
    }

}

export default {
    controller: Register,
    templateUrl: "register.html"
}