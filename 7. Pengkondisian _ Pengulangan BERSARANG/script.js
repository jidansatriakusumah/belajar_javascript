var s = '';

for (var i = 10; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    s += '*';
  }
  s += '\n';
}


for (var i = 0; i <= 15; i++) {
  for (var j = 1; j <= i; j++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);