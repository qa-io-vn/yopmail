import { getInbox, getMailDetails} from '../utils/yopmail'

describe('Yop mail', () => {

  it('Should able to get yopmail inbox', async () => {
    const inbox = await getInbox('admin01');

    expect(inbox).not.toBeUndefined()
  })

  it('Should able to get yopmail inbox details', async () => {
    const inbox = await getInbox('admin01');
    const mailDetails = await getMailDetails(inbox[0].id,'admin01');

    expect(mailDetails).not.toBeUndefined()
  })

})
