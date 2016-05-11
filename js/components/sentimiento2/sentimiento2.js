angular.module("sentimiento2", [])
    .component("sentimiento2", {
        templateUrl: "./js/components/sentimiento2/sentimiento2.html"
    })
    .filter('split', function () {
        return function (input, splitChar, splitIndex) {
            // do some bounds checking here to ensure it has that index
            return input.split(splitChar)[splitIndex];
        }
    })
    .controller('tablaControlador', tablaControlador);

/** funciones */
function tablaControlador($scope, $http) {

    $scope.rows = [];
    $scope.rowContent = "";
    $scope.counter = 0;

    $scope.addRow = function () {
        $scope.rows.push($scope.rowContent);
        $scope.counter++;
    }

    $scope.removeItem = function (index) {
        $scope.rows.splice(index, 1);
    }

    var $ta = $("#ta");
    var $startIndex = $("#startIndex"),
        $endIndex = $("#endIndex");

    function reportSelection() {
        var sel = $ta.getSelection();
        $startIndex.text(sel.start);
        $endIndex.text(sel.end);
    }

    $(document).on("selectionchange", reportSelection);
    $ta.on("keyup input mouseup textInput", reportSelection);

    $ta.focus();

    reportSelection();

    $("input").mousedown(function (e) {
        e.preventDefault();

        switch (this.name) {
            case "replaceSelectedTextAndCollapse":
                $ta.replaceSelectedText("**Test**", "collapseToEnd");
                break;
            case "replaceSelectedTextAndSelect":
                $ta.replaceSelectedText("**Test**", "select");
                break;
            case "deleteText":
                $ta.deleteText(+$('#ta_start').val(), +$('#ta_end').val());
                break;
            case "deleteSelectedText":
                $ta.deleteSelectedText();
                break;
            case "extractSelectedText":
                alert($ta.extractSelectedText());
                break;
            case "showSelectedText0":
                $scope.rowContent = ($ta.showSelectedText0());
                break;
            case "showSelectedText1":
                $scope.rowContent = ($ta.showSelectedText1());
                break;
            case "showSelectedText2":
                $scope.rowContent = ($ta.showSelectedText2());
                break;
            case "showSelectedText3":
                $scope.rowContent = ($ta.showSelectedText3());
                break;
            case "showSelectedText4":
                $scope.rowContent = ($ta.showSelectedText4());
                break;
            case "surroundSelectedText":
                $ta.surroundSelectedText("[Before]", "[After]");
                break;
            case "collapseToStart":
                $ta.collapseSelection(true);
                break;
            case "collapseToEnd":
                $ta.collapseSelection(false);
                break;
            case "setSelection":
                $ta.setSelection(+$('#ta_start').val(), +$('#ta_end').val());
                break;
        }
        $ta.focus();

        // For IE, which always shifts the focus onto the button
        window.setTimeout(function () {
            $ta.focus();
        }, 0);
    });

    var vm = this;
    vm.buscaCervezas = function () {
        var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
        if (vm.nombre) {
            url += "&query=" + vm.nombre;
        }
        $http.jsonp(url).success(function (respuesta) {
            console.log("res:", respuesta);
            vm.cervezas = respuesta.beers;
        });
    }
}
