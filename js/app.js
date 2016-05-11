var app = angular
    .module("mockupsApp", [
        'ngRoute',
        'menuBar',
        'textPanel',
        'leyenda',
        'footer',
        'skip',
        'next',
        'login',
        'globo',
        'signup',
        'sentimiento',
        'categorias',
        'entidades',
        'sentimiento2',
        'mainController']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/js/components/login/login.html',
            controller: 'indexController'
        })
        .when('/sentimiento', {
            templateUrl: '/js/components/sentimiento/sentimiento.html',
            controller: 'sentimientoController'
        })
        .when('/categorias', {
            templateUrl: '/js/components/categorias/categorias.html',
            controller: 'categoriasController'
        })
        .when('/entidades', {
            templateUrl: '/js/components/entidades/entidades.html',
            controller: 'entidadesController'
        })
        .when('/sentimiento2', {
            templateUrl: '/assets/js/components/sentimiento2/sentimiento2.html',
            controller: 'sentimiento2Controller'
        })
        .when('/signup', {
            templateUrl: '/js/components/signup/signup.html',
            controller: 'signup'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
