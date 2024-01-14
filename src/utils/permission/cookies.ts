import axios from 'axios';
export let cookies: string[] | undefined = [];
export async function getCookie() {
  const response = await axios({
    method: 'get',
    url: 'https://yopmail.com',
  });
  // @ts-ignore
  if (cookies != []) {
    cookies = response.headers['set-cookie'];
  }
  return cookies;
}

export async function createGetMailCookies() {
  const cookie = await getCookie();
  const date = new Date();
  const yTime = date.getHours() + ':' + date.getMinutes();
  cookie?.push(`ytime=${yTime}`);
  return cookie?.toString();
}
