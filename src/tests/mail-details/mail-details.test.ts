import {getInbox} from '../../utils/inbox/inbox';
import {getMailDetails} from '../../utils/mail-details/mail-details';
import {getLinkOfFirstMail} from '../../utils/mail-details/mail-details-helper';
import {delay} from '../../utils/delay/delays';

describe('mail details', () => {
  beforeEach( async ()=>{
    await delay();
  });

  it('Should able to get yopmail inbox details', async () => {
    const inbox = await getInbox('admin02');
    const mailDetails = await getMailDetails(inbox[0].id, 'admin02');

    expect(mailDetails).not.toBeUndefined();
  });
  it('Should able to get link of inbox details', async () => {
    const links = await getLinkOfFirstMail('admin02');

    expect(links).not.toBeUndefined();
  });
});
