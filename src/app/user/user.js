require('./user.html');

class User {
    constructor() {
        console.log('User constructor')
    }
}

export default {
    controller: User,
    templateUrl: "user.html"
}