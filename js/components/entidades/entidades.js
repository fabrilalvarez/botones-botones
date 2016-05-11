angular.module("entidades", [])
    .component("entidades", {
        templateUrl: "./js/components/entidades/entidades.html"
    })
    .directive('botones', botones)
    .controller('buttonsOptions', buttonsOptions);

/* funciones */
function botones() {
    var tpl = '<button id="{{myid}}button" ng-class="tipo" data-ng-click="funcion" type="button" class="btn btn-sm">{{ padre }}</button>';
    return {
        restrict: 'E',
        scope: {
            padre: '@',
            tipo: '@',
            myid: '@',
            funcion: '&ngClick'
        },
        template: tpl
    }
}

function buttonsOptions($scope) {
    $scope.mifuncion = function () {
       
    }
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
    $scope.datos = [
        {
            tema: 'Política',
            items: [
                {
                    id: 1,
                    titulo: 'Elecciones Generales'
                }, {
                    id: 2,
                    titulo: 'Partidos'
                }, {
                    id: 3,
                    titulo: 'España'
                }, {
                    id: 4,
                    titulo: 'Galicia'
                }, {
                    id: 5,
                    titulo: 'Cataluña'
                }, {
                    id: 6,
                    titulo: 'Andalucía'
                }, {
                    id: 7,
                    titulo: 'Comunidad Valenciana'
                }, {
                    id: 8,
                    titulo: 'País Vasco'
                }
            ]
        },
        {
            tema: 'Deportes',
            items: [
                {
                    id: 1,
                    titulo: 'Futbol'
                }, {
                    id: 2,
                    titulo: 'Tenis'
                }, {
                    id: 3,
                    titulo: 'Baloncesto'
                }, {
                    id: 4,
                    titulo: 'Fórmula1'
                }, {
                    id: 5,
                    titulo: 'Motociclismo'
                }
            ]
        },
        {
            tema: 'Ciencia',
            items: [
                {
                    id: 1,
                    titulo: 'Ciencia & Tecnología'
                }
            ]
        },
        {
            tema: 'Educacion',
            items: [
                {
                    id: 1,
                    titulo: 'Primaria'
                }, {
                    id: 2,
                    titulo: 'ESO'
                }, {
                    id: 3,
                    titulo: 'Bachillerato'
                }, {
                    id: 4,
                    titulo: 'Universidad'
                }, {
                    id: 5,
                    titulo: 'FP'
                }, {
                    id: 6,
                    titulo: 'FPS'
                }
            ]
        },
        {
            tema: 'Economía',
            items: [
                {
                    id: 1,
                    titulo: 'Europa'
                }, {
                    id: 2,
                    titulo: 'Mercado'
                }, {
                    id: 3,
                    titulo: 'Empresas'
                }, {
                    id: 4,
                    titulo: 'Vivienda'
                }, {
                    id: 5,
                    titulo: 'Cotizaciones'
                }, {
                    id: 5,
                    titulo: 'Ibex'
                }
            ]
        },
        {
            tema: 'cultura',
            items: [
                {
                    id: 1,
                    titulo: 'Cine'
                }, {
                    id: 2,
                    titulo: 'Música'
                }, {
                    id: 3,
                    titulo: 'Series'
                }, {
                    id: 4,
                    titulo: 'Libros'
                }, {
                    id: 5,
                    titulo: 'Arte'
                }, {
                    id: 5,
                    titulo: 'Teatro'
                }
            ]
        }
    ];
}
