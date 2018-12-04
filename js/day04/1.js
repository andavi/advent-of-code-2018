const fs = require('fs');
 
fs.readFile('input', 'utf8', (err, data) => {  
    if (err) throw err;
    const result = data.split('\n');
    console.log(result);
});
