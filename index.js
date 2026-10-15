function phi(r) {
  if (r % 7 === 0) {
    return 22 / 7;
  } else {
    return 3.14;
  }
}

function hitung(r, cb) {
  const luas = phi(r) * r * r;
  const keliling = 2 * phi(r) * r;
  return cb(luas, keliling);
}

function hasil(luas, keliling) {
  console.log(`Luas: ${luas}, Keliling: ${keliling}`);
}

hitung(10, hasil);
