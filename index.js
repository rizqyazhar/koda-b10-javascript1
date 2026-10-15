const jariJari = 10;

// impure function

const choosePhi = () => {
  if (jariJari % 7 === 0) {
    return 22 / 7;
  } else {
    return 3.14;
  }
};

// pure function

const calc = (phi, r) => {
  const luasLingkaran = phi * r * r;
  const kelilingLingkaran = 2 * phi * r;
  return [luasLingkaran, kelilingLingkaran];
};

const [hasiLuas, hasilKeliling] = calc(choosePhi(), jariJari);

console.log(`Luas: ${hasiLuas}, Keliling: ${hasilKeliling}`);
