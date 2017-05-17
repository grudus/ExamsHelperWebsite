require('./modal.confirmation.html')
/*@ngInject*/
export default ($q, $document) => ({
    restrict: "EA",
    templateUrl: "modal.confirmation.html",
    scope: {
        show: '=',
        message: "@",
        title: "@",
        onSubmit: '&',
        onCancel: '&'
    },
    link: (scope, elm, attrs) => {
        scope.hideModal = function () {
            scope.show = false;
        };

        scope.onSubmitAction = function () {
            scope.onSubmit();
            scope.hideModal();
        };

        scope.onCancelAction = function () {
            scope.onCancel();
            scope.hideModal();
        }


    }
});