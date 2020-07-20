alert('Selamat Datang!');

var lagi = true;

while (lagi === true) {
  var nama = prompt('Masukkan nama:');

  alert('Halo ' + nama);

  var lagi = confirm('Coba lagi?');
}

var yakin = confirm('Terimakasih! Apakah kamu yakin dengan misteri yang ada di Bandung?');

if (yakin === true) {
  alert('Hmmm, begitu juga...');
} else {
  alert('Hmmm... :v');
}