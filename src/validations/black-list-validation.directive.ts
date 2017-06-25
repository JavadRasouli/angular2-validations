import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[blackList][formControlName],[blackList][formControl],[blackList][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => BlackListValidation), multi: true }
    ]
})
export class BlackListValidation implements Validator {
    constructor(
        @Attribute('blackList')
        public blackList: string
    ) { }

    validate(elem: AbstractControl): { [key: string]: any } {
        let value = elem.value;
        let blacklist = this.blackList.split(',');

        if(blacklist.indexOf(value.toString()) !== -1)
        return {
            blackList: false
        }
        return null;
    }
}