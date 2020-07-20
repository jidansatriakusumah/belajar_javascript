// manipulasi array

// 1. membuat array

var arr = ['a', 1, true];

console.log(arr);

var arr = [];
arr[0] = "Sandhika";
arr[1] = "Jidan";

console.log(arr);

// 2. menghapus isi array

var arr = ["Jidan", 'Satria', true];
arr[2] = undefined;
console.log(arr);

// 3. menampilkan array

var arr = ['a', 1, true];

for (var i = 0; i < arr.length; i++) {
  console.log('Item ke ' + i + arr[i]);
}

// method pada array

// 1. join

var arr = ['Jidan', 'Satria', 'Kusumah'];

console.log(arr.join())

// 2. push & pop

arr.push('Dody', 'Animation');
console.log(arr.join(' / '))

arr.pop();
arr.pop();
console.log(arr.join(' - '));

// 3. unshift & shift

arr.unshift('Haget', 'Ali');
console.log(arr.join());

arr.shift();
console.log(arr.join());

// 4. splice
// indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2...

arr = ['Jidan', 'Satria', 'Kusumah', 'Bejo'];

arr.splice(3, 1, 'Bin', 'Dan seterusnya');
console.log(arr.join());

// 5. slice
// ambil -> (awal, akhir + 1)

var arr1 = arr.slice(3, 5);
console.log(arr1.join());

// 6. forEach

var angka = [1, 2, 3, 4, 5];

angka.forEach(function (z, i) {
  console.log(z + ' element ke ' + i);
});

// 7. map
// mengembalikan array

var angka = [1, 3, 10, 5, 7, 20, 6, 4, 2];
var angka1 = angka.map(function (e) {
  return e * 2;
})

console.log(angka1.join());

// 8. sort (mengurutkan)

angka.sort(function (f, g) {
  return f - g;
});
console.log(angka.join());

// 9. filter -> array 

var angka = [1, 3, 10, 15, 80, 2];

var angka1 = angka.filter(function (x) {
  return x > 5;
})

console.log(angka1.join());

// 10. find -> 1 nilai saja

var angka2 = angka.find(function (y) {
  return y < 2;
})

console.log(angka2);

// lebih lengkap di https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array