import axios from 'axios';

export async function getVersion() {
  const response = await axios({
    method: 'get',
    url: 'https://yopmail.com',
  });

  return response.data.match(/\/ver\/(\d+\.\d+)\//)[1] + '';
}
