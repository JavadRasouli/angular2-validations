## RemoteValidation

This directive will check the ngModel property value is valid on server-side policies or not.

##### Example

###### In this code sample, remoteValidation directive check userName is Valid or not. if server side code is similar to flowing code, you can use this html tags. 

###### c# code

```c#
[HttpGet("users/{userName}/IsValid")]
public IActionResult UserIsValid(string userName)
{
    if (userName == "javad")
        return Ok(true);
    return Ok(false);
}
```

###### html code

```html
<div class="form-group" [class.has-error]="userName.invalid">
    <label class="control-label">User Name</label>
    <input class="form-control" type="text" name="userName" 
      ngModel 
      #userName="ngModel" 
      required 
      [remoteValidation]="'http://localhost:61366/api/Account/users/:value/IsValid'">
    
    <div *ngIf="userName.pending">
      <p>please wait. cheking userName ...</p>
    </div>

    <div *ngIf="!userName.valid && userName.dirty">
      <p *ngIf="userName.hasError('required')">User name is required</p>
      <p *ngIf="userName.hasError('remoteValidation')">User name is not valid.</p>
    </div>
</div>
```

##### ':value' in url replace with ngModel value. 

##### If you want to send an additional parameter or set http header, you can use the 'requestOptions' attribute. this attribute take template expersion from 'RequestOptions' type.

```c#
public class Extra
{
    public string Id { get; set; }
}

[HttpGet("users/{userName}/IsValid")]
public IActionResult UserIsValid(string userName, [FromQuery]Extra extra)
{
    if (userName == "javad")
        return Ok(true);
    return Ok(false);
}
```

```typescript
import { Component } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, URLSearchParams } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  options = new RequestOptions();

  constructor() {

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');    
    this.options.headers = myHeaders;

    let myParams = new URLSearchParams();
    myParams.append('Id', "10");	
    this.options.params = myParams;
  }
}
```

```html
<div class="form-group" [class.has-error]="userName.invalid">
    
    <label class="control-label">User Name</label>
    <input class="form-control" type="text" name="userName" 
      ngModel 
      #userName="ngModel" 
      required 
      [remoteValidation]="'http://localhost:61366/api/Account/users/:value/IsValid'"
      [requestOptions]="options">
    
    <div *ngIf="userName.pending">
      <p>please wait. cheking userName ...</p>
    </div>

    <div *ngIf="!userName.valid && userName.dirty">
      <p *ngIf="userName.hasError('required')">userName is required</p>
      <p *ngIf="userName.hasError('remoteValidation')">User name is not valid.</p>
    </div>
  </div>
```

## License

[`MIT`](./LICENSE.md)
