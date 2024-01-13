import axios from "axios";

export async function getCookie(){
    const response = await axios({
        method: 'get',
        url: 'https://yopmail.com'
    });
    if(response.headers['set-cookie']==undefined) return [];
    return response.headers['set-cookie'];
}

export async function createGetMailCookies(){
    const cookie = await getCookie();
    const date = new Date();
    const yTime = date.getHours() + ':' + date.getMinutes();
    cookie?.push(`ytime=${yTime}`);
    return cookie?.toString();
}
