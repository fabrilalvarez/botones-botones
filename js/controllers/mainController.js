angular
    .module('mainController', [])
    .controller('signUP', signUP)
    .controller('textpanel', textpanel)
    .controller('sentimientoController', sentimientoController)
    .controller('categoriasController', categoriasController)
    .controller('entidadesController', entidadesController)
    .controller('sentimiento2Controller', sentimiento2Controller)
    .controller('loginController', loginController);

/** funciones */
function signUP($scope) {
    $scope.action = "exitoso!";
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function sentimientoController($scope, $location) {
    $scope.nombre = "Sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
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
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function sentimiento2Controller($scope, $location) {
    $scope.nombre = "Sentimiento2";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento2');
    };
}
/** Esta funcion se pueden optimizar, se dejan así para posibles usos distintos en el futuro */
function loginController($scope, $location) {
    $scope.nombre = "Login";
    $scope.irLogin = function () {
        $location.url('/login');
    };
    $scope.irSignUp = function () {
        $location.url('/signup');
    };
}

/** Estaría bien que esto estubiera dentro del archivo textPanel.js pero en la vista sentimiento2 se pierde el controlador, así que por ahora se va a quedar así. */
function textpanel($scope) {
    $scope.quepasa = "AQUI VA UN TEXTO PARA ANALIZAR";
}
