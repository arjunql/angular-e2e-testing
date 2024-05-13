import { Injectable } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  getValidationErrors(group: FormGroup, validationMessages: any, isSubmitted?:boolean) {
      let formErrors: any = {};
      Object.keys(group.controls).forEach((key: string) => {
          const abstractControl: any = group.get(key);
          formErrors[key] = '';
          if (
              abstractControl &&
              !abstractControl.valid &&
              (abstractControl.touched || abstractControl.dirty)
          ) {
              const messages = validationMessages[key];
              
              for (const errorKey in abstractControl.errors) {
                  
                  if (errorKey !== 'matDatepickerMax') {
                      formErrors[key] = messages?.[errorKey] + ' ';
                  }
              }
          }

          if (
              abstractControl &&
              !abstractControl.valid && isSubmitted
          ) {
              
              const messages = validationMessages[key];

              for (const errorKey in abstractControl.errors) {
                 
                  if (errorKey !== 'matDatepickerMax') {
                      formErrors[key] = messages?.[errorKey] + ' ';
                  }
              }
          }

          if (abstractControl instanceof FormGroup) {
              let groupError: any = this.getValidationErrors(
                  abstractControl,
                  validationMessages,
                  isSubmitted
              );

              formErrors = { ...formErrors, ...groupError };
          }
      });
      return formErrors;
  }
}
