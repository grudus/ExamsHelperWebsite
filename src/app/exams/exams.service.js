/*@ngInject*/
export default ($resource, API) => $resource(API + '/exams/:resource/:label', {}, {
    getAllAsMap: {method: 'GET', isArray: true, params: {resource: "day"}},
    countWithoutGrade: {method: "GET", params: {resource: "without-grade", label: "count"}},
    updateGrade: {method: 'PUT', params: {resource: '@id'}}
});