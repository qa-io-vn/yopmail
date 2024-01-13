import {getCookie} from '../../utils/permission/cookies';
import {delay} from '../../utils/delay/delays';

describe('cookies', () => {
  beforeEach( async ()=>{
    await delay();
  });

  it('Should able to get yopmail cookie', async () => {
    const inbox = await getCookie();

    expect(inbox?.length).toBeGreaterThan(0);
  });
});
