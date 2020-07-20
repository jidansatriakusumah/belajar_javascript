var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot no.' + noAngkot + ' beroperasi dengan baik!');
  } else {
    console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi!');
  }
}
