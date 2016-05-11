angular.module("sentimiento", [])
    .component("sentimiento", {
        templateUrl: "./js/components/sentimiento/sentimiento.html"
    })
    .controller('globoControlador', globoControlador)
    .controller('buscador', ['$http', controladorPrincipal]);

/** funciones */
function globoControlador($scope) {
    $scope.enviar = function (valor) {
        var texto = angular.element('#text').text();
        alert(texto + "#$" + valor);
    };
    $scope.config = [
        'btn btn-1',
        'btn btn-2',
        'btn btn-3',
        'btn btn-4',
        'btn btn-5'
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
