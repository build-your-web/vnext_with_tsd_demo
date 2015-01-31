/// <reference path="typings/tsd.d.ts" />
module Demo {
    'use strict';

    var todomvc = angular.module('demo', [])
        .controller('demoCtrl', DemoCtrl);
}