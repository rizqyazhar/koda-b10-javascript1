function phi(r) {
  if (r % 7 === 0) {
    return 22 / 7;
  } else {
    return 3.14;
  }
}

function luas(phi, r) {
  return phi(r) * r * r;
}

function keliling(phi, r) {
  return 2 * phi(r) * r;
}

function hitung(phi, r, cb) {
  return cb(luas(phi, r), keliling(phi, r));
}

function hasil(luas, keliling) {
  console.log(`Luas: ${luas}, Keliling: ${keliling}`);
}

hitung(phi, 7, hasil);
