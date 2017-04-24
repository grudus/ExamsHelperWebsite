export default class Authorization {
    /*@ngInject*/
    constructor(AUTH_HEADER, $window, AuthService, $state, $stateParams, $q, $timeout) {
        window.console.log("AAuthA constructor");
        this.$stateParams = $stateParams;
        this.header = AUTH_HEADER;
        this.$localStorage = $window.localStorage;
        this.AuthService = AuthService;
        this.$state = $state;
        this.$q = $q;
        this.$timeout = $timeout;
    }


    checkUserAccess($state) {
        window.console.log("Checking user's access");
        if (!this.isOnline()) {
            console.log("Is not online!");
            window.console.log(this.$state.current.name);
            this.$timeout(function () {
                $state.go('auth.login')
            });
            return this.$q.reject('You have to be authenticated to see this content')
        }
        return this.$q.when();

    }

    isOnline() {
        return this.$localStorage.auth;
    }

    login(user) {
        window.console.log("AAuthA login");
        this.$localStorage.auth = "dupa";
        // this.AuthService.login({}, {username: user.username, password: user.password},
        //     (response, d, headers) => {
        //         console.log("Logged in");
        //         console.log(response);
        //         console.log(headers);
        //     }, error => console.log(error));
    }
}