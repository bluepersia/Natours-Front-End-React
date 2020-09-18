export function monthName(monthNum) {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthNum];
}


export function getReadable(date) {
    return `${monthName(date.getMonth())} ${date.getFullYear()}`;
}