import {getVersion} from './version';
import axios from 'axios';

export async function getYj() {
  const version = await getVersion();
  const url = `https://yopmail.com/ver/${version}/webmail.js`;
  const response = await axios({
    method: 'get',
    url: url,
  });

  const match = response.data.match(/&yj=([^&]+)&v=/);
  return match?match[1]:null;
}
