'use strict';

let div = document.getElementById('unos');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
let p = document.createElement('p');
let countOne = 0;
let retentionTime = 2;
let tableRows = 4;
let tableColuns = 3;
let vreme;
for (let i = 0; i < tableRows; i++) {
  let trn = table.appendChild(tr.cloneNode());
  for (let j = 0; j < tableColuns; j++) {
    trn.appendChild(td.cloneNode());
  }
}
div.append(table);
let row = table.firstElementChild;
function clock(where) {
  vreme = new Date().toLocaleTimeString();
  p.textContent = vreme;
  where.appendChild(p);

  countOne++;
  if (countOne === retentionTime) {
    if (where.nextSibling === null) {
      row = row.nextSibling;
      if (row === null) row = table.firstElementChild;
      where = row.firstElementChild;
    } else where = where.nextSibling;
    countOne = 0;
  }
  setTimeout(clock, 1000, where);
}
clock(row.firstElementChild);
