# angular-file-model

updata ngModel when user select file.

## Example

```html
<input type="file" ng-model="myFile" ng-file-model />

<div >filename: <span ng-bind="myFile.name"></span></div>
<div >filesize: <span ng-bind="myFile.size"></span></div>
<div >filetype: <span ng-bind="myFile.type"></span></div>
```

## base64
```html
<input type="file" ng-model="myFile" ng-file-model="base64" />

<img src="{{ file.base64 }}" />
```
