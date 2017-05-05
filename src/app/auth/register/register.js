require("./register.html");

class Register {
    /*@ngInject*/
    constructor(Authorization, $state, UserService) {
        window.console.log("Register");
        this.Authorization = Authorization;
        this.$state = $state;
        this.UserService = UserService;
    }

    emailExists(email) {
        return  this.UserService.exists({email: email}).$promise
    }

    usernameExists(username) {
        return  this.UserService.exists({username: username}).$promise
    }

}

export default {
    controller: Register,
    templateUrl: "register.html"
}