// membuat object
// object literal

var santri = {
  nama: 'Jidan',
  id: 1,
  email: 'jidansatriakusumah@example.com',
  jusuran: 'IPS'
};

// function declaration
function buatObjectSantri(nama, id, email, jurusan) {
  var santri = {};
  santri.nama = nama;
  santri.id = id;
  santri.email = email;
  santri.jurusan = jurusan;
  return santri;
}

var santri1 = buatObjectSantri('Ghalih', 1, 'ghalih@example.com', 'Teknik');

// constructor

function Santri(nama, id, email, jurusan) {
  this.nama = nama;
  this.id = id;
  this.email = email;
  this.jurusan = jurusan;
}

var santri2 = new Santri('Daffa', 3, 'daffa@example.com', 'MTK');