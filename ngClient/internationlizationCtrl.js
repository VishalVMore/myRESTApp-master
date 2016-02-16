var app = angular.module('app', []);

app.controller('internationlizationCtrl', ['$scope', '$rootScope', '$locale', function ($scope, $rootScope, $locale) {

    $scope.switchLang = function (lang) {
        $rootScope.currentLanguage = lang;
        //alert($locale.id);
    }
                         
}]);

app.filter('i18n', ['$rootScope', function ($rootScope) {
    return function (input) {
        
        var translations = {
            'it': {
                'SALUTATION': 'Saluto',
                'AGE': 'Età',
                'ITALIAN': 'Italiano',
                'ENGLISH': 'English',
                'HINDI': 'हिंदी'
            },
            'en': {
                'SALUTATION': 'Salutation',
                'AGE': 'Age',
                'ITALIAN': 'Italiano',
                'ENGLISH': 'English',
                'HINDI': 'हिंदी'
            },
            'hn': {
                'SALUTATION': 'अभिवादन',
                'AGE': 'उम्र',
                'ITALIAN': 'Italiano',
                'ENGLISH': 'English',
                'HINDI': 'हिंदी'
            }
        };

        var currentLanguage = $rootScope.currentLanguage || 'it';
        
        return translations[currentLanguage][input];
    }
}]);