// pengulangan

var tanya = true;

while (tanya) {

  // menangkap pilihan player

  var p = prompt('pilih: gajah, semut, orang');

  // menangkap pilihan computer
  // membangkitkan pilihan random

  var com = Math.random();

  if (com < 0.34) {
    com = 'gajah';
  } else if (com >= 0.34 && com < 0.67) {
    com = 'orang';
  } else {
    com = 'semut';
  }


  var hasil = '';
  // rules

  if (p == com) {
    hasil = 'SERI!';
  } else if (p == 'gajah') {
    // if (com == 'orang') {
    //   hasil = 'MENANG!';
    // } else {
    //   hasil = 'kalah!';
    // }
    hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
  } else if (p == 'orang') {
    hasil = (com == 'gajah') ? 'KALAH!' : 'MENANG!';
  } else if (p == 'semut') {
    hasil = (com == 'orang') ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Memasukkan pilihan yang salah!';
  }

  // hasil

  if (p == 'gajah' || p == 'semut' || p == 'orang') {
    alert('Kamu memilih ' + p + ' dan komputer memilih ' + com + ', maka hasilnya adalah ' + hasil);
  } else {
    alert(hasil);
  }

  tanya = confirm('lagi?');

}