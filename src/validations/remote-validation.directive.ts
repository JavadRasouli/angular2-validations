import { Directive, forwardRef, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Http, RequestOptions, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Directive({
    selector: '[remoteValidation][formControlName],[remoteValidation][formControl],[remoteValidation][ngModel]',
    providers: [
        { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => RemoteValidation), multi: true }
    ]
})
export class RemoteValidation implements AsyncValidator {

    constructor(private _http: Http) {
    }

    @Input('remoteValidation') url: string;
    @Input('requestOptions') requestOptions: RequestOptions;

    validate(elem: AbstractControl): Promise<{ [key: string]: any; }> {
        
        let value = elem.value;
        let url = this.url.replace(/:value/ig, value);
        let options: RequestOptions;

        if (this.requestOptions != undefined) {
            options = <RequestOptions>JSON.parse(JSON.stringify(this.requestOptions));
            options.body = null;
            options.method = RequestMethod.Get;
        }

        return new Promise(resolve => {

            this._http.get(url, options)
                .map(response => response.json())
                .subscribe(r => {
                    if (r == true)
                        resolve(null);
                    else
                        resolve({ remoteValidation: true });
                }, error => {
                    resolve({ remoteValidation: true });
                    throw error;
                });
        });
    }
}