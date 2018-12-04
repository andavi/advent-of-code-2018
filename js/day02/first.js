const fs = require('fs');

fs.readFile('input', 'utf8', (err, data) => {  
  if (err) throw err;
  let twos = 0, threes = 0;
  data.split('\n').forEach(str => {
    const obj = {};
    str.split('').forEach(c => {
      obj[c] = obj[c] ? obj[c] + 1 : 1;
    });
    if (Object.values(obj).filter(v => v === 2).length) twos++;
    if (Object.values(obj).filter(v => v === 3).length) threes++;
  });
  console.log(twos * threes);
});
