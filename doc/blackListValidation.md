## BlackListValidation

This directive will check the ngModel property value to not contain the black listed values. The black list value should passed to directive by a `blackList` property. If there is multiple black list values you can use a comma seperated format on `blackList` property.



##### Single Example

```html
<div class="form-group" [class.has-error]="blackList">
    <label class="control-label">Primary Language</label>
    <select class="form-control" name="primaryLanguage" ngModel blackList='default' #primaryLanguage="ngModel">
          <option value="default">Select a Language...</option>
          <option *ngFor="let lang of languages">
            {{ lang }}
          </option>
      </select>
      <small [hidden]="primaryLanguage.valid">
        Not Valid
      </small>
  </div>
```

##### Multiple balck list value Example

```html
<div class="form-group" [class.has-error]="blackList">
    <label class="control-label">Primary Language</label>
    <select class="form-control" name="primaryLanguage" ngModel blackList='default,fa' #primaryLanguage="ngModel">
          <option value="default">Select a Language...</option>
          <option *ngFor="let lang of languages">
            {{ lang }}
          </option>
      </select>
      <small [hidden]="primaryLanguage.valid">
        Not Valid
      </small>
  </div>
```

## License

[`MIT`](./LICENSE.md)