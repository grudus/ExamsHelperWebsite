/*@ngInject*/
export default ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $translateProvider) => {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('/');
    $translateProvider.useLocalStorage().useLoaderCache(true).forceAsyncReload(true).useSanitizeValueStrategy(null)
        .useStaticFilesLoader({
            prefix: '/i18n/locale_',
            suffix: '.json'
        })
        .registerAvailableLanguageKeys(["en"], {
            "*": "en"
        }).determinePreferredLanguage();

    $stateProvider
        .state('app', {
                abstract: true,
                component: "app",
                resolve: {
                    access: (Authorization, $state) =>
                        Authorization.checkUserAccess($state),
                    uiSelectStart: (uiSelectConfig) => uiSelectConfig.theme = 'selectize'
                }
            }
        );

    $httpProvider.interceptors.push(($rootScope, $q, $translate, $state) => {
        return {
            responseError: (res) => {
                if (!res.config.ignoreInterceptor) {
                    if (res.status === 401) $state.go("error");
                    else if (res.status === 403) $state.go("error.forbidden");
                    else if (res.status === 404) $state.go("error.notFound");
                    else if (res.status >= 400) $state.go("error");
                    return $q.reject(res);
                }
            }
        };

    })
}