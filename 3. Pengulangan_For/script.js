var noAngkot = 1;
var angkotBeroperasi = 8;
var jmlAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot no.' + noAngkot + ' beroperasi dengan baik!');

  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi!');
}