## BlackListValidation

This directive will check the ngModel property value to not contain the black listed values. The black list value should passed one array of 'any type', to directive by a `blackList` property.

##### Example

###### In this code sample, same numbers are not allowed.
```html
<div class="form-group" [class.has-error]="code.invalid">
    <label class="control-label">Code</label>
    <input class="form-control" type="text" name="code" 
    ngModel 
    required 
    minlength="6"
    maxlength="6"
    [blackList]="['111111', '222222', '333333', '444444', '555555', '666666', '777777', '888888', '999999', '000000']" #code="ngModel">
    <div *ngIf="!code.valid">
      <p *ngIf="code.hasError('blackList')">Code not valid.</p>
      <p *ngIf="code.hasError('required')">Code is required.</p>
      <p *ngIf="code.hasError('minlength')">length is 6 digit.</p>
      <p *ngIf="code.hasError('maxlength')">length is 6 digit.</p>
    </div>
  </div>
```

###### In this code sample, Select following items is not allowed. 'default', '' and undefined

```html
<div class="form-group" [class.has-error]="primaryLanguage.invalid">
    
    <label class="control-label">Primary Language</label>
    <select class="form-control" name="primaryLanguage" 
            ngModel [blackList]="['default', '', undefined]" 
            required 
            #primaryLanguage="ngModel">

          <option value="default">Select a Language...</option>
          <option *ngFor="let lang of languages">
            {{ lang }}
          </option>

      </select>
    <div *ngIf="!primaryLanguage.valid">
      <p *ngIf="primaryLanguage.hasError('blackList')">primaryLanguage not valid</p>
      <p *ngIf="primaryLanguage.hasError('required')">primaryLanguage is required</p>
    </div>

  </div>
```

## License

[`MIT`](./LICENSE.md)