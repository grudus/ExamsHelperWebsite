require('./input.text.html')

export default () => ({
    restrict: "EA",
    templateUrl: "input.text.html",
    scope: {
        label: "@",
        model: '='
    },
});