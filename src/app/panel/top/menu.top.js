require("./menu.top.html");

class TopMenu {
    /*@ngInject*/
    constructor(Authorization) {
        this.Authorization = Authorization;
    }

    logout() {
        this.Authorization.logout();
    }
}


export default {
    templateUrl: 'menu.top.html',
    controller: TopMenu
};