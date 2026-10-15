const jariJari = 10;
let phi;

// impure function

const choosePhi = () => {
  if (jariJari % 7 === 0) {
    return (phi = 22 / 7);
  } else {
    return (phi = 3.14);
  }
};

// pure function

const calc = (jariJari) => {
  const luasLingkaran = choosePhi() * jariJari * jariJari;
  const kelilingLingkaran = 2 * choosePhi() * jariJari;
  return [luasLingkaran, kelilingLingkaran];
};

console.log(`Luas: ${calc(jariJari)[0]}, Keliling: ${calc(jariJari)[1]}`);
