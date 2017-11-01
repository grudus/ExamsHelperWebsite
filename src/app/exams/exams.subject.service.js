/*@ngInject*/
export default ($resource, API) => $resource(API + '/exams/:resource/', {}, {
   getForSubject: {method: 'GET', isArray: true, params: {resource: 'without-grade'}}
});