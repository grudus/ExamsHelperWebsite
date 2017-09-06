require('./user.html');

class User {
    /*@ngInject*/
    constructor(UserService) {
        this.UserService = UserService;
        this.loading = true;
    }

    async $onInit() {
        this.user = await this.UserService.get();
        this.loading = false;
    }
}

export default {
    controller: User,
    templateUrl: "user.html"
}