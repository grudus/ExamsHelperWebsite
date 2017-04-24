/*@ngInject*/
export default ($resource, API) => $resource(API + '/auth/:resource', {}, {
    login: {method: 'POST', headers: {withCredentials: true}, params: {resource: 'login'}}
});