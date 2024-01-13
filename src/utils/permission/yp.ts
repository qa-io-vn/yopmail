import axios from 'axios';
import {parse} from 'node-html-parser';

export async function getYp() {
  const response = await axios({
    method: 'get',
    url: 'https://yopmail.com',
  });

  const data = parse(response.data);
  const result = data.querySelector('#yp')?.getAttribute('value');

  return result+'';
}
