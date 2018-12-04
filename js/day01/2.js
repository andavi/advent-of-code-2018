const fs = require('fs');
 
fs.readFile('input', 'utf8', (err, data) => {  
    if (err) throw err;
    const arr = data.split('\n').map(n => Number(n));
    const set = new Set();
    let total = 0;
    for (let i = 0; true; i = (i + 1) % arr.length) {
      if (set.has(total)) {
        console.log(total);
        return;
      }
      set.add(total);
      total += arr[i];
    }
});
