const fs = require('fs');

fs.readFile('input', 'utf8', (err, data) => {  
  if (err) throw err;
  const arr = data.split('\n');
  arr.forEach((str1, index) => {
    arr.slice(index + 1).forEach(str2 => {
      for (let i = 0; i < str1.length; i++) {
        const sub1 = str1.slice(0, i) + str1.slice(i + 1);
        const sub2 = str2.slice(0, i) + str2.slice(i + 1);
        if (sub1 === sub2) {
          console.log(sub1);
          break;
        }
      }
    });
  });
});
