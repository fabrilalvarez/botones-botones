angular
    .module('mainController', [])
    .controller('signUP', signUP)
    .controller('globo', globo)
    .controller('sentimientoController', sentimientoController)
    .controller('categoriasController', categoriasController)
    .controller('entidadesController', entidadesController)
    .controller('sentimiento2Controller', sentimiento2Controller)
    .controller('loginController', loginController);

/** funciones */
function signUP($scope) {
    $scope.action = "exitoso!";
}

function sentimientoController($scope, $location) {
    $scope.nombre = "Sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function sentimiento2Controller($scope, $location) {
    $scope.nombre = "Sentimiento2";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento2');
    };
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function categoriasController($scope, $location) {
    $scope.nombre = "Categorias";
    $scope.irCategorias = function () {
        $location.url('/categorias');
    };
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function entidadesController($scope, $location) {
    $scope.nombre = "Entidades";
    $scope.irEntidades = function () {
        $location.url('/entidades');
    };
}

function loginController($scope, $location) {
    $scope.nombre = "login";
    $scope.irLogin = function () {
        $location.url('/login');
    };
    $scope.irSignUp = function () {
        $location.url('/signup');
    };
}

/** IMPORTANTE detector mouse */
function globo($scope) {
    $scope.quepasa = "AQUI VA UN TEXTO PARA ANALIZAR";
    var i;
    $scope.list = [];
    for (i = 0; i < 24; i++) {
        $scope.list.push(i);
    }
    $scope.globoBotonesPosicion = 0;
    $scope.onmouseover = function (i) {
        $scope.globoBotonesPosicion = i;
    }
    $scope.$watch('globoBotonesPosicion', function (n, o) {
        $("#" + o).removeClass("globoBotones");
        $("#" + n).addClass("globoBotones");
    });
}
/*
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
*/
