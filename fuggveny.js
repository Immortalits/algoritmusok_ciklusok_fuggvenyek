// létrehozzuk az x array-t, melynek elemei: üres - String, 4 - szám, true -boolean
const x = ['', 4, true];
// létrehozzuk az f array-t, ami üres
const f = [];

// for-on belül létrehozzuk az i változót, ami 0-tól az x hosszáig (elemeinek mennyiségéig) megy egyesével
for (let i = 0; i < x.length; i++) {
  // létrehozzuk az a változót, ami az x i-dik eleme
  let a = x[i];
  // beletesszük az a változó típusát az f array-e
  f.push(typeof (a));
}
// kiírjuk a console-ra az f arrayt
console.log(f)