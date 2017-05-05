/*@ngInject*/
export default ($resource, API) => $resource(API + '/user/:resource', {}, {
    exists: {method: 'GET', params: {resource: 'exists'}}
});