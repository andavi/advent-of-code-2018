const fs = require('fs');
 
fs.readFile('input', 'utf8', (err, data) => {  
    if (err) throw err;
    const result = data.split('\n').map(n => Number(n)).reduce((a, n) => a + n);
    console.log(result);
});
