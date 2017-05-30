require('./user.html');

class User {
    /*@ngInject*/
    constructor(UserService) {
        this.UserService = UserService;

        this.UserService.get({}, (resopnse) => {
            this.username = resopnse.username;
            this.email = resopnse.email;
            this.registerDate = resopnse.registerDate;
        });
    }
}

export default {
    controller: User,
    templateUrl: "user.html"
}