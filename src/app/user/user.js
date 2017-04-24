require('./user.html');

class User {
    /*@ngInject*/
    constructor(UserService) {
        this.UserService = UserService;
        console.log('User constructor');

        this.UserService.get({}, (resopnse) => {
            this.username = resopnse.username;
            this.email = resopnse.email;
            this.registerDate = resopnse.registerDate;
            window.console.log(resopnse);
        });
    }
}

export default {
    controller: User,
    templateUrl: "user.html"
}