/*@ngInject*/
export default ($resource, API) => $resource(API + '/exams/:resource/:label', {}, {
    getAllAsMap: {method: 'GET', params: {resource: "day"}}
});