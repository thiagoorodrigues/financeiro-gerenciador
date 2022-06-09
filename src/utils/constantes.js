export const PROD = true;
export const API_URL = PROD ? 'http://191.252.221.12:3333/' : 'http://localhost:3333/';

export const TOKEN = "";

export const HEADER = {
    'Content-Type': "application/json",
    'x-access-token': TOKEN
}