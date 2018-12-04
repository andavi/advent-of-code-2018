const fs = require('fs');

function getSpecs(p) {
  const id = p.match(/#\d+/)[0].slice(1);
  const corner = p.match(/\d+,\d+/)[0].split(',');
  const x1 = Number(corner[0]);
  const y1 = Number(corner[1]);
  const delta = p.match(/\d+x\d+/)[0].split('x');
  const x2 = x1 + Number(delta[0]);
  const y2 = y1 + Number(delta[1]);
  return { id, x1, y1, x2, y2 };
}
 
fs.readFile('input', 'utf8', (err, data) => {  
  if (err) throw err;

  const dim = 1000;
  const fabric = Array(dim).fill().map(n => Array(dim).fill('.'));

  // paint patches on fabric
  const patches = data.split('\n');
  patches.forEach(p => {
    const { id, x1, y1, x2, y2 } = getSpecs(p);
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        if (fabric[i][j] !== '.') fabric[i][j] = 'X';
        else fabric[i][j] = id;
      }
    }
  });

  // check for patch without overlap
  patches.forEach(p => {
    const { id, x1, y1, x2, y2 } = getSpecs(p);
    let overlapped = false;
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        if (fabric[i][j] !== id) {
          overlapped = true;
          break;
        }
      }
    }
    if (!overlapped) console.log(id);
  });
});