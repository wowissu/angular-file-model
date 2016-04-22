/**
    Version: 1.0.0
    Author: wowissu
    github: https://github.com/wowissu/angular-file-model
 */
/*global arguments, window, $, angular */
/*jslint this:true */
/*property
    require, module, directive, restrict, link, $setViewValue, $render, ngModelInit, $element, bind, files
*/

(function (angular) {
    "use strict";

    var app = angular.module('ngFileModel', []);

    app.directive('ngFileModel', [function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function ($scope, $element, $attrs, ngModel) {
                $element.bind('change', function () {
                    ngModel.$setViewValue($element[0].files[0]);
                    ngModel.$render();
                });
            }
        };
    }]);

}(angular));