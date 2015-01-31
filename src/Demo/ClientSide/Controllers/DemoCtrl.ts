/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../interfaces/idemoscope.ts" />
module Demo {
    'use strict';

    export class DemoCtrl {

        constructor(private $scope: IDemoScope) {
            $scope.greeting = "Wellcome!"
            $scope.login = function (name) {
                $scope.greeting = "Hello, " + name + "!";
            }
        }

    }
}