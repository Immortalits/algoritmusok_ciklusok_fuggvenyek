// létrehozzuk a players array-t
const players = ['Peter', 'Kate', 'John'];

// for-on belül létrehozzuk az i változót, ami 0-tól a players hosszáig (elemeinek mennyiségéig) megy egyesével
for (let i = 0; i < players.length; i++) {
  // consolra kiírjuk a nums elemének sorszámás+1 -mert 0-tól kezdődik a számozás, de mi 1-től sorszámozunk - hozzáfűzünk egy '. ' stringet és és hozzáfűzzük az elemet is
  console.log([i + 1] + '. ' + players[i])
}