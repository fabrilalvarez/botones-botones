angular.module("categorias", [])
    .component("categorias", {
        templateUrl: "./js/components/categorias/categorias.html"
    })
    .controller('opciones', opciones)
    .controller('buscador', ['$http', controladorPrincipal]);

/* funciones */
function opciones($scope) {
    $scope.enviar = function () {
        var tema = angular.element(this).attr('tema');
        var texto = angular.element('#text').text();
        alert(texto + "#$" + tema);
    };
    $scope.recibir = "recibir datos con ajax";
    $scope.tiposBoton = [
        'btn-default',
        'btn-primary',
        'btn-success',
        'btn-info',
        'btn-warning',
        'btn-danger',
        'btn-default',
        'btn-primary',
        'btn-success',
        'btn-info',
        'btn-warning',
        'btn-danger',
        'btn-default',
        'btn-primary',
        'btn-success',
        'btn-info',
        'btn-warning',
        'btn-danger',
        'btn-default',
        'btn-primary',
        'btn-success',
        'btn-info',
        'btn-warning',
        'btn-danger'
    ];
    $scope.temas = [
        'Politica',
        'Deportes',
        'Ciencia',
        'Educación',
        'Economía',
        'Cultura'
    ];
}

function controladorPrincipal($http) {
    var vm = this;

    vm.buscaEnRegion = function () {
        $http.get(vm.url).success(function (respuesta) {
            //console.log("res:", respuesta);
            vm.paises = respuesta;
        });
    }
}
