require('./user.html');

class User {
    /*@ngInject*/
    constructor(UserService) {
        this.UserService = UserService;
        console.log('User constructor');

        this.UserService.get();
    }
}

export default {
    controller: User,
    templateUrl: "user.html"
}