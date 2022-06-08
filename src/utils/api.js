import { HEADER, API_URL } from './constantes';

export const api = async (url, method = 'GET', body = undefined, parse = false) => {
    let headers = HEADER;

    if(window.localStorage.getItem('token')){
        headers['x-access-token'] = window.localStorage.getItem('token');
    }

    console.log(headers);

    const request = new Request(API_URL + url, {
        headers: headers,
        method: method,
        body: body ? JSON.stringify(body) : undefined,
    });

    const response = await fetch(request);
    const data = await response.json();

    return data;
}