require('./user.html');

class User {
    /*@ngInject*/
    constructor(UserService) {
        this.UserService = UserService;
    }

    async $onInit() {
        this.user = await this.UserService.get();
    }
}

export default {
    controller: User,
    templateUrl: "user.html"
}