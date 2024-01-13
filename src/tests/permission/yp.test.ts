import {getYj} from '../../utils/permission/yj';
import {delay} from '../../utils/delay/delays';

describe('yp', () => {
  beforeEach( async ()=>{
    await delay();
  });

  it('Should able to get yopmail yp', async () => {
    const yj = await getYj();

    expect(yj).not.toBeUndefined();
  });
});
