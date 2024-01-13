import {getInbox} from "../../utils/inbox/inbox";
import {delay} from "../../utils/delay/delays";


describe('inbox', () => {
  beforeEach( async ()=>{
    await delay();
  })

  it('Should able to get yopmail inbox', async () => {
    const inbox = await getInbox('admin01');

    expect(inbox).not.toBeUndefined()
  })

})
