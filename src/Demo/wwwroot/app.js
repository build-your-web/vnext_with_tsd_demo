/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../interfaces/idemoscope.ts" />
var Demo;
(function (Demo) {
    'use strict';
    var DemoCtrl = (function () {
        function DemoCtrl($scope) {
            this.$scope = $scope;
            $scope.greeting = "Wellcome!";
            $scope.login = function (name) {
                $scope.greeting = "Hello, " + name + "!";
            };
        }
        return DemoCtrl;
    })();
    Demo.DemoCtrl = DemoCtrl;
})(Demo || (Demo = {}));
/// <reference path="typings/tsd.d.ts" />
var Demo;
(function (Demo) {
    'use strict';
    var todomvc = angular.module('demo', []).controller('demoCtrl', Demo.DemoCtrl);
})(Demo || (Demo = {}));
