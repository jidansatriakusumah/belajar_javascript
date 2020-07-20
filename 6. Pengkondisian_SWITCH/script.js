var item = prompt('Masukkan makanan / minuman! \ncth: nasi, daging, sayuran, hamburger, softdrink');

switch (item) {
  case 'nasi':
  case 'daging':
  case 'sayuran':
    alert('Makanan / minuman yang anda masukkan SEHAT');
    break;
  case 'hamburger':
  case 'softdrink':
    alert('Makanan / minuman yang anda masukkan KURANG SEHAT');
    break;
  default:
    alert('Anda memasukkan diluar contoh!');
    break;
}