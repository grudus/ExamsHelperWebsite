/*@ngInject*/
export default ($resource, API) => $resource(API + '/user', {}, {});