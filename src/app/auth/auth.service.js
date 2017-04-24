/*@ngInject*/
export default ($resource, API) => $resource(API + '/:resource', {}, {
    login: {method: 'POST', params: {resource: 'login'}}
});