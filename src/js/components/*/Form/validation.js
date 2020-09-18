const validators =
{
    'required': val => Boolean(val),
    'minLength': (val, setting) => String(val).length >= setting,
    'maxLength': (val, setting) => String(val).length <= setting,
    'min': (val, setting) => val >= setting,
    'max': (val, setting) => val <= setting,
    '=': (val, setting) => val == this[setting],
    '<': (val, setting) => val < this[setting],
    '>': (val, setting) => val > this[setting],
    '<=': (val, setting) => val <= this[setting],
    '>=': (val, setting) => val >= this[setting],
    'email': val => validateEmail(val),
    'validator': (val, setting) => setting.call(this, val)
}

function validateSingle(val, allValues, validator, validatorSetting) {

    if (!allValues)
        allValues = {};

    return validator.call(allValues, val, validatorSetting.length >= 0 ? validatorSetting[0] : validatorSetting);
}


export default function validate(val, allValues, validation) {

    if (!validation)
        return '';

    for (const [validatorKey, validatorSetting] of Object.entries(validation))
        if (!validateSingle(val, allValues, validators[validatorKey], validatorSetting))
            return validatorKey;


    return '';
}






function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}