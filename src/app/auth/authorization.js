export default class Authorization {
    /*@ngInject*/
    constructor(AUTH_HEADER, $window, AuthService, $state, $http, $stateParams, $q, $timeout) {
        this.header = AUTH_HEADER;
        this.$localStorage = $window.localStorage;
        this.AuthService = AuthService;
        this.$state = $state;
        this.$q = $q;
        this.$timeout = $timeout;
        this.$http = $http;
    }


    checkUserAccess($state) {
        if (!this.isOnline()) {
            window.console.log(this.$state.current.name);
            this.$timeout(function () {
                $state.go('auth.login')
            });
            return this.$q.reject('You have to be authenticated to see this content')
        }
        this.addDefaultTokenHeader();
        return this.$q.when();

    }

    isOnline() {
        return this.$localStorage[this.header];
    }

    setAuth(token) {
        if (!this.$localStorage[this.header]) {
            this.$localStorage[this.header] = token;
            this.addDefaultTokenHeader();
        }
    }

    addDefaultTokenHeader() {
        this.$http.defaults.headers.common[this.header] =
            this.$localStorage[this.header];
    }

    logout() {
        this.$localStorage.removeItem(this.header);
        this.$state.go("auth.login");
    }

    login(user, successCallback, errorCallback) {
        this.AuthService.login({username: user.username, password: user.password}, {}, (response, headers) => {
            successCallback();
            this.setAuth(headers()[this.header.toLowerCase()]);
            this.$state.go("app.user");
        }, (error) => errorCallback())
    }

    register(user) {
        return this.AuthService.register({redirect_uri: window.location.host}, user).$promise
    }
}