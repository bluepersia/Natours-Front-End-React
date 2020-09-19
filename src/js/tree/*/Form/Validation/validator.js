
MinLength.getMsg = minLength => `Must be at least ${minLength} characters`;
export function MinLength(minLength) {

    function validate(val) {
        return String(val).length >= minLength ? '' : MinLength.getMsg.call(this, minLength, val);
    }
    validate.inputProp = { minLength };

    return validate;


}

MaxLength.getMsg = maxLength => `Must not be more than ${maxLength} characters`;
export function MaxLength(maxLength) {

    function validate(val) {
        return String(val).length <= maxLength ? '' : MaxLength.getMsg.call(this, maxLength, val);
    }

    validate.inputProp = { maxLength };

    return validate;

}


Min.getMsg = min => `Must be at least ${min}`;
export function Min(min) {

    function validate(val) {
        return val >= min ? '' : Min.getMsg.call(this, min, val);
    }

    validate.inputProp = { min };

    return validate;
}

Max.getMsg = max => `Must not be more than ${max}`;
export function Max(max) {

    function validate(val) {
        return val <= max ? '' : Max.getMsg.call(this, max, val);
    }

    validate.inputProp = { max };

    return validate;
}


IsRequired.getMsg = () => 'Is required';
IsRequired.inputProp = { required: true }
export function IsRequired(val) {
    return Boolean(val) ? '' : IsRequired.getMsg.call(this, val);
}


IsEmail.getMsg = () => 'Must be a valid email address';
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export function IsEmail(val) {

    return re.test(String(val).toLowerCase()) ? '' : IsEmail.getMsg.call(this, val);
}

IsEqualsToOther.getMsg = other => `Must be the same as ${other}`;
export function IsEqualsToOther(other) {



    function validate(val) {
        return val == this[other] ? '' : IsEqualsToOther.getMsg.call(this, other, val);
    }

    return validate;

}


/*
export class MinLength extends Validator {
 
 
    validate(value) {
        return String(value).length >= this.setting;
    }
 
 
    getMsg() {
        return `Must be at least ${this.setting} characters`
    }
 
    getInputProp() {
        return { 'minLength': this.setting }
    }
}
 
export class MaxLength extends Validator {
 
    validate(value) {
        return String(value).length <= this.setting;
    }
 
    getMsg() {
        return `Must not be more than ${this.setting} characters`
    }
 
    getInputProp() {
        return { 'maxLength': this.setting }
    }
}
 
export class Min extends Validator {
 
    validate(value) {
        return value >= this.setting;
    }
 
    getMsg() {
        return `Must be at least ${this.setting}`
    }
 
    getInputProp() {
        return { 'min': this.setting }
    }
}
export class Max extends Validator {
 
    validate(value) {
        return value <= this.setting;
    }
 
    getMsg() {
        return `Must not be more than ${this.setting}`
    }
 
    getInputProp() {
        return { 'max': this.setting }
    }
}
 
export class IsRequired extends Validator {
 
    constructor() {
        super(true);
    }
 
    validate(value) {
        return Boolean(value);
    }
 
    getMsg() {
        return 'Is required';
    }
 
    getInputProp() {
        return { 'required': true }
    }
}
 
export class IsEmail extends Validator {
 
    constructor() {
        super(true);
    }
 
    validate(value) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    }
 
    getMsg() {
        return 'Must be a valid email'
    }
}
 
*/



function getInputProps(validators) {
    return validators.reduce((acc, { inputProp }) => inputProp ? ({ ...acc, ...inputProp }) : acc, {});
}



function validate(val, allValues, validators) {

    if (!validators)
        return '';

    for (const { validate } of validators) {
        const msg = validate.call(allValues, val);
        if (msg)
            return msg;

    }

    return '';
}
