/*@ngInject*/
export default ($resource, API) => $resource(API + '/subjects/:resource', {}, {
    exists: {method: 'GET', params: {resource: 'exists'}},
    add: {method: 'POST'}
});