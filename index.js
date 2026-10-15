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

const luasLingkaran = (jariJari) => {
  return choosePhi() * jariJari * jariJari;
};
const kelilingLingkaran = (jariJari) => {
  return 2 * choosePhi() * jariJari;
};

console.log(luasLingkaran(jariJari));
console.log(kelilingLingkaran(jariJari));
