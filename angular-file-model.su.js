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

// test branch

(function (angular) {
    "use strict";

    var app = angular.module('ngFileModel', []);

    app.directive('ngFileModel', [function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function ($scope, $element, $attrs, ngModel) {
                if ($attrs.ngFileModel == 'base64') {
                    $element.bind('change', function () {
                        var reader = new FileReader();
                        var file = $element[0].files[0];

                        reader.addEventListener("load", function () {

                            ngModel.$setViewValue({
                                lastModified: file.lastModified,
                                lastModifiedDate: file.lastModifiedDate,
                                name: file.name,
                                size: file.size,
                                type: file.type,
                                webkitRelativePath: file.webkitRelativePath,
                                base64: reader.result,
                            });
                            ngModel.$render();

                        }, false);

                        if (file) {
                            reader.readAsDataURL(file);
                        }
                    });
                } else {
                    $element.bind('change', function () {
                        ngModel.$setViewValue($element[0].files[0]);
                        ngModel.$render();
                    });
                }
            }
        };
    }]);

}(angular));
