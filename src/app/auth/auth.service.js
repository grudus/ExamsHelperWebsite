/*@ngInject*/
export default ($resource, API) => $resource(API + '/auth/:resource', {}, {
    // TODO 25.04.2017 Remove from url?
    login: {method: 'POST', headers: {withCredentials: true}, params: {resource: 'login'}},
    register: {method: 'POST',  headers: {withCredentials: true}, params: {resource: 'register'}}
});