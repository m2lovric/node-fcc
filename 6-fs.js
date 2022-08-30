const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

let first = readFileSync('./files/first.txt', 'utf8');
let second = readFileSync('./files/second.txt', 'utf8');
//console.log(first, second);

writeFileSync('./files/first.txt', ' added text', { flag: 'a' });

first = readFileSync('./files/first.txt', 'utf8');
//console.log(first, second);

readFile('./files/test.txt', 'utf8', (err, res) => {
  if (err) console.log(err);
  const firstTxt = res;

  readFile('./files/second.txt', 'utf8', (err, res) => {
    if (err) console.log(err);
    const secondText = res;

    writeFile(
      './files/result-async.txt',
      `Here is the result ${firstTxt}, ${secondText}`,
      (err, res) => {
        if (err) console.log(err);
        console.log(res);
      }
    );
  });
});
