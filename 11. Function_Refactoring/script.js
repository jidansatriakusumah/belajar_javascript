function jumlahVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

var a = parseInt(prompt('Masukkan sisi kubus a!'));
var b = parseInt(prompt('Masukkan sisi kubus b!'));

alert('Jumlah voume keduanya adalah: ' + jumlahVolumeDuaKubus(a, b));
