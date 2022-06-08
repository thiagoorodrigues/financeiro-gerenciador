export const PROD = false;
export const API_URL = PROD ? 'http://localhost:3333/' : 'http://localhost:3333/';

export const TOKEN = "";

export const HEADER = {
    'Content-Type': "application/json",
    'x-access-token': TOKEN
}