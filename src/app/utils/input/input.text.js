require('./input.text.html')

/*@ngInject*/
export default ($timeout) => ({
    restrict: "EA",
    templateUrl: "input.text.html",
    scope: {
        label: "@",
        model: '=',
        preventDefault: '='
    },
    link: ($scope) => {
        $timeout(() => {
            Materialize.updateTextFields();
        }, 300); //todo find better solution, it really sucks

        $scope.onKeyPressed = function (event) {
            if ($scope.preventDefault)
                event.preventDefault();
        }
    }
});