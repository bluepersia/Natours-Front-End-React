export default function (msg, name, setting) {

    switch (msg) {
        case 'required':
            msg = `${name} is required`
            break;

        case 'email':
            msg = 'Must be an email'
            break;

        case 'minLength':
            msg = `Must be at least ${setting} characters long`
            break;

        case 'maxLength':
            msg = `Must not be longer than ${setting} characters`;
            break;

        case 'min':
            msg = `Must be at least ${setting}`
            break;

        case 'max':
            msg = `Must not be more than ${settings}`;
            break;

        case '=':
            msg`Must be the same as ${setting}`
            break;

        case '<':
            msg = `Must be less than ${setting}`
            break;

        case '>':
            msg = `Must be greater than ${setting}`
            break;

        case '<=':
            msg = `Must be less than or equal to ${setting}`;
            break;

        case '>=':
            msg = `Must be greater than or equal to ${setting}`;
            break;
    }

    console.log(msg);
    if (msg)
        msg = msg[0].toUpperCase() + msg.slice(1);


    return msg;
}


