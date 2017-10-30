/*@ngInject*/
export default ($resource, API) => $resource(API + '/stats/:resource', {}, {
    average: {method: 'GET', isArray: true, params: {resource: 'average'}}
});