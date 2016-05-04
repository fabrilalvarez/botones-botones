angular.module("entidades", [])
    .component("entidades", {
        templateUrl: "./js/components/entidades/entidades.html"
    })
    .directive('addbuttons', function ($compile) {
        return function (scope, element) {
            element.bind("click", function () {
                angular
                    .element(document.getElementById('espacio-para-botones'))
                    .append($compile('<botones addbuttons padre="{{tema}}" tipo="{{tiposBoton[$index]}}" funcion="mifuncion"></botones><br>')(scope));
            });
        };
    })
    .directive('botones', botones)
    .controller('buttonsOptions', buttonsOptions);

/* funciones */
function botones() {
    return {
        restrict: 'E',
        scope: {
            padre: '@',
            tipo: '@',
            funcion: '@'
        },
        template: '<button ng-class="tipo" ng-click="funcion" type="button" class="btn btn-sm">{{ padre }}</button>'
    }
}

function buttonsOptions($scope) {
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
        'politica',
        'deportes',
        'ciencia',
        'educación',
        'economía',
        'cultura'
    ];
    /* titulos */
    $scope.politica = ['Elecciones Generales', 'Partidos', 'España', 'Galicia', 'cataluña', 'Andalucía', 'Comunidad Valenciana', 'País Vasco'];
    $scope.deportes = ['futbol', 'tenis', 'baloncesto', 'formula1', 'motociclismo'];
    $scope.ciencia = ['Ciencia & Tecnología'];
    $scope.educacion = ['Primaria', 'ESO', 'Bachillerato', 'Universidad', 'FP', 'FPS'];
    $scope.economia = ['Europa', 'Mercado', 'Empresas', 'Vivienda', 'Cotizaciones', 'Ibex', 'Bolsa'];
    $scope.cultura = ['cine', 'musica', 'series', 'libros', 'arte', 'teatro'];
    /* deportes */
    $scope.futbol = ['Real Madrid', 'Barcelona', 'Celta'];
    $scope.tenis = ['Masculino', 'Femenino'];
    $scope.baloncesto = ['Equipos', 'NBA'];
    $scope.formula1 = ['Fórmula1'];
    $scope.motociclismo = ['Motociclismo'];
}
