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
        .state('appl', {
            url: '/',
            component: "app"
        })
        .state('dupa', {
            url: '/dupa',
            template: '<div>Dupa</div>'
        });

}