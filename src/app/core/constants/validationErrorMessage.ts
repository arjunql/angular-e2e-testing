export default class ValidationErrorMessage{

    validationRegex={
        email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$', // email
        alphabet_only: new RegExp(/^[a-zA-Z ]+$/), // allow on alphabets
        aplhaNumeric: new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/), // allow only alphabets and numbers
        whiteSpace:new RegExp(/^$|^\S+/) // don't allow white space
    }
    // login = {    // module name
    //     email: { // formControlName
    //         required: 'required',  // error type
    //         pattern:'pattern/regex'
    //     },
    // }
}