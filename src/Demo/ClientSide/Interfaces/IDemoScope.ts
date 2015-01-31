/// <reference path="../typings/tsd.d.ts" />
module Demo {
    export interface IDemoScope extends ng.IScope {
        greeting: string;
        login: (name: string) => void;
    }
}