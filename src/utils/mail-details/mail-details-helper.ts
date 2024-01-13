import {getInbox} from "../inbox/inbox";
import {getMailDetails} from "./mail-details";

export async function  getLinkOfFirstMail(mailAddress: string){
    let result: any[] = [];
    const  mails = await getInbox(mailAddress);
    const idOfFirstMail = mails[0].id;
    const mailDetail = await getMailDetails(idOfFirstMail,mailAddress);
    let res1 = mailDetail.body.match(/https?:\/\/[^\s]+/);
    let res2 = mailDetail.body.match(/http?:\/\/[^\s]+/);
    result.push(res1,res2);

    return result;
}
