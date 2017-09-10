/*@ngInject*/
export default ($resource, API) => $resource(API + '/subjects/:resource/exams/:info', {}, {
   getForSubject: {method: 'GET', isArray: true, params: {resource: '@id', info: 'without-grade'}}
});