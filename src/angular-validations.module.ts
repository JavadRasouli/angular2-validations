import { NgModule } from '@angular/core';
import { BlackListValidation } from './validations/black-list-validation.directive';
import { RemoteValidation } from './validations/remote-validation.directive';

@NgModule({
  declarations: [BlackListValidation, RemoteValidation],
  imports: [],
  exports: [BlackListValidation, RemoteValidation],
  providers: [],
})
export class AngularValidations { }
