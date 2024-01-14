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
const easyYOPmail = require('yopmail-helper');
```

#### ✉️ *get inbox of a mail address*
``` js
const inbox = await getInbox('admin01');
```

#### 🗃️ *Read details of an email*
``` js
const mailDetails = await getMailDetails(inbox[0].id, 'admin01');
```
#### 📑 *Read link of an email*
``` js
const links = await getLinkOfFirstMail('admin01');
```
