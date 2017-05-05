/*@ngInject*/
export default ($q) => ({
    require: 'ngModel',
    scope: {
        "checkingExistence": "&",
        "error": '='
    },
    link: (scope, elm, attrs, ctrl) => {
        ctrl.$options.$$options.updateOn = 'default blur';
        ctrl.$options.$$options.debounce = {default: 100, blur: 0};

        ctrl.$asyncValidators.emailAvailable = (modelValue) => {
            if (ctrl.$isEmpty(modelValue)) return $q.when();
            let def = $q.defer();
            scope.checkingExistence({value: modelValue}).then((res) => {
                scope.error = res.exists;
                elm[0].setCustomValidity(res.exists ? "already exists" : '');
                return res.exists
                    ? def.reject()
                    : def.resolve()
            });
            ctrl.$valid ? ctrl.$options.$$options.debounce.default = 0 : null;
            return def.promise;
        };
    }
});