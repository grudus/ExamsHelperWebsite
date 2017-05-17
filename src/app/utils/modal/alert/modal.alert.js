require('./modal.alert.html')
/*@ngInject*/
export default ($q, $document) => ({
    restrict: "EA",
    templateUrl: "modal.alert.html",
    scope: {
        show: '=',
        message: "@",
        title: "@",
        onSubmit: '&'
    },
    link: (scope, elm, attrs) => {
        scope.hideModal = function () {
            scope.show = false;
        };

        scope.onSubmitAction = function () {
            scope.onSubmit();
            scope.hideModal();
        }


    }
});