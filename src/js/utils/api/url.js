const url = 'https://calm-meadow-10288.herokuapp.com/';

const apiUrl = `${url}api/v1/`;



function getUrl(path) {
    return `${url}${path}`;
}

function getImageUrl(path) {
    return `${url}img/${path}`;
}


function getTourImageUrl(filename) {
    return getImageUrl(`tours/${filename}`);
}

function getUserImageUrl(filename) {
    return getImageUrl(`users/${filename}`);
}


function getIconUrl(icon) {
    return `/img/icons.svg#icon-${icon}`
}


function getApiUrl(path) {
    return `${apiUrl}${path}`;
}

function getUserUrl(path) {
    return getApiUrl(`users/${path}`);
}



export { url, apiUrl, getUrl, getApiUrl, getImageUrl, getTourImageUrl, getUserImageUrl, getIconUrl, getUserUrl };