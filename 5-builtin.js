const os = require('os');
const path = require('path');

const user = os.userInfo();

const currentOS = {
  user: user,
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

//console.log(currentOS);

console.log(path.sep);

const filePath = path.join('/files', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'files', 'test.txt');
console.log(absolute);
