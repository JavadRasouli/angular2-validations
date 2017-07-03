import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[blackList][formControlName],[blackList][formControl],[blackList][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => BlackListValidation), multi: true }
    ]
})
export class BlackListValidation implements Validator {

    @Input('blackList') blackList: Array<any>;

    constructor() { }

    validate(elem: AbstractControl): { [key: string]: any } {
        let value = elem.value;

        if (this.blackList.indexOf(value != undefined ? value.toString() : value) !== -1)
            return { blackList: true };
        return null;
    }
}