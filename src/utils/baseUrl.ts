export function getMailDetailsUrl(id: string){
    return `https://yopmail.com/mail?b=admin01&id=m${id}`
}

export function getInboxUrl(mailAddress: string, yp: string, yj:string, ver: string){
    return `https://yopmail.com/inbox?login=${mailAddress}&p=1&d=&ctrl=&yp=${yp}&yj=${yj}&v=${ver}&r_c=&id=&ad=0`;
}
