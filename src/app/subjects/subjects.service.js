/*@ngInject*/
export default ($resource, API) => $resource(API + '/subjects/:resource/:label', {}, {
    exists: {method: 'GET', params: {resource: 'exists'}},
    add: {method: 'POST'},
    details: {method: 'GET', params: {resource: '@label'}}
});