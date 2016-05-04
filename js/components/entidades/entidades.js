angular.module("entidades", [])
    .component("entidades", {
        templateUrl: "./js/components/entidades/entidades.html"
    })
    .component('generadorDeBotones', {
        template: [
            '<div ng-controller="buttonsGenerator">',
            '<table>',
            '<tr>',
            '<td style="padding-left:10px" ng-repeat = "tema in temas">',
            '<button ng-class="tiposBoton[$index]" type="button" class="btn btn-sm">{{ tema }}</button>',
            '</td>',
            '</tr>',
            '</table>',
            '</div>'
        ].join('')
    })
    .controller('buttonsGenerator', buttonsGenerator);

/* funciones */
function buttonsGenerator($scope) {
    $scope.tiposBoton = [
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
