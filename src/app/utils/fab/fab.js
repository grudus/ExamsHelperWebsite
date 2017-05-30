require('./fab.html')

/*@ngInject*/
export default () => ({
    restrict: "EA",
    templateUrl: "fab.html",
    scope: {
        onClick: '&'
    }
});