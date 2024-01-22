# Yopmail helper

## 📦 Install
You can install the library using [NPM](https://www.npmjs.com/) or [Yarm](https://yarnpkg.com/)
```
npm i yopmail-helper
```
```
yarn add yopmail-helper
```
## 🔧 How to use

``` js
//Declare module
import { inbox, linkOfFirstMail, mailDetails, mailDetailsHtml } from 'yopmail-helper';
```

#### ✉️ *get inbox of a mail address*
``` js
    const mails = await inbox('admin01');
```

#### 🗃️ *Read details of an email*
``` js
    const mails = await inbox('admin01');
    const mailDetailsInfo = await mailDetails(mails[0].mailId,'admin01');
```

#### 🗃️ *Read details of an email in HTML*
``` js
    const mails = await inbox('admin01');
    const mailDetailsHtmlInfo = await mailDetailsHtml(mails[0].mailId,'admin01');
```

#### 📑 *Read link of an email*
``` js
    const link = await linkOfFirstMail('admin01');
```
