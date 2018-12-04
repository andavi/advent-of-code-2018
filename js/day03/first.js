const fs = require('fs');
 
fs.readFile('input', 'utf8', (err, data) => {  
    if (err) throw err;

    const dim = 1000;
    const fabric = Array(dim).fill().map(n => Array(dim).fill('.'));

    const patches = data.split('\n');
    patches.forEach(p => {
        const id = p.match(/#\d+/)[0].slice(1);
        const corner = p.match(/\d+,\d+/)[0].split(',');
        const x1 = Number(corner[0]);
        const y1 = Number(corner[1]);
        const delta = p.match(/\d+x\d+/)[0].split('x');
        const x2 = x1 + Number(delta[0]);
        const y2 = y1 + Number(delta[1]);
        
        for (let i = x1; i < x2; i++) {
          for (let j = y1; j < y2; j++) {
            if (fabric[i][j] !== '.') fabric[i][j] = 'X';
            else fabric[i][j] = id;
          }
        }
      });
      
      const result = fabric.reduce((acc, row) => {
        return acc + row.reduce((a, p) => {
          return p === 'X' ? a + 1 : a;
        }, 0);
      }, 0);

      console.log(result);
});