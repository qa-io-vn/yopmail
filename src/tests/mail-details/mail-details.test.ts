import {getInbox} from '../../utils/inbox/inbox';
import {getMailDetails} from '../../utils/mail-details/mail-details';
import {getLinkOfFirstMail} from '../../utils/mail-details/mail-details-helper';
import {delay} from '../../utils/delay/delays';

describe('mail details', () => {
  beforeEach( async ()=>{
    await delay();
  });

  it('Should able to get yopmail inbox details', async () => {
    const inbox = await getInbox('admin01');
    const mailDetails = await getMailDetails(inbox[0].id, 'admin01');

    expect(mailDetails).not.toBeUndefined();
  });
  it('Should able to get link of inbox details', async () => {
    const link = await getLinkOfFirstMail('admin01');

    expect(link).not.toBeUndefined();
  });
});
