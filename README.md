# angular-file-model
init ng-model

## Example

```html
<input type="file" ng-model="myFile" ng-file-model />

<div >filename: <span ng-bind="myFile.name"></span></div>
<div >filesize: <span ng-bind="myFile.size"></span></div>
<div >filetype: <span ng-bind="myFile.type"></span></div>
```


## Directive

```js
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
```
