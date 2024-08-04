angular.module('dashboardApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/guide.html',
                controller: 'GuideController'
            })
            .when('/handleUpload', {
                templateUrl: 'views/handle-upload.html',
                controller: 'UploadHandleController'
            })
            .when('/upload', {
                templateUrl: 'views/upload.html',
                controller: 'UploadController'
            })
            .when('/check', {
                templateUrl: 'views/check.html',
                controller: 'CheckController'
            })
            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'ListController'
            })
            .when('/document', {
                templateUrl: 'views/doc.html',
                controller: 'ListController'
            })
            .when('/docker', {
                templateUrl: 'views/docker.html',
                controller: 'DockerController'
            })
            .when('/logs', {
                templateUrl: 'views/logs.html',
                controller: 'LogController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
