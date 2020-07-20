var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log('Angkot no.' + noAngkot + ' sedang beroperasi dengan baik!');
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log('Angkot no.' + noAngkot + ' sedang lembur!');
  } else {
    console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi!');
  }
}