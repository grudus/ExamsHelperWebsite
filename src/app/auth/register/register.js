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
        this.Authorization.register({username: this.username, password: this.password, email: this.email})
            .then(res => {
                this.modalShown = true;
            }, error => {
                this.$state.go('error')
            })
    }

    goToTheLoginPage() {
        this.$state.go('auth.login');
    }


}

export default {
    controller: Register,
    templateUrl: "register.html"
}