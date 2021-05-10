// létrehozzuk a nums array-t
const nums = [3, 4, 9, 6, 2];

// for-on belül létrehozzuk az i változót, ami 0-tól a nums hosszáig (elemeinek mennyiségéig) megy egyesével
for (let i = 0; i < nums.length; i++) {
  // ha a nums adott eleme 2-vel osztva nem ad maradékot, akkor...
  if (nums[i] % 2 === 0) {
    // ...akkor kiírjuk a console-ra az elemet + ': osztható' stringet
    console.log(nums[i] + ': osztható')
  } else {
    // ...ha ad maradékot, akkor kiírjuk a console-ra az elemet + ': nem osztható' stringet
    console.log(nums[i] + ': nem osztható')
  }
}