import {getVersion} from '../../utils/permission/version';
import {delay} from '../../utils/delay/delays';

describe('version', () => {
  beforeEach( async ()=>{
    await delay();
  });

  it('Should able to get yopmail version', async () => {
    const version = await getVersion();

    expect(version).not.toBeUndefined();
  });
});
