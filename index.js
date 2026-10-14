const jariJari = 10;
let phi;
let luasLingkaran;
let kelilingLingkaran;

if (jariJari % 7 === 0) {
  phi = 22 / 7;
  luasLingkaran = phi * jariJari * jariJari;
  kelilingLingkaran = 2 * phi * jariJari;
} else {
  phi = 3.14;
  luasLingkaran = phi * jariJari * jariJari;
  kelilingLingkaran = 2 * phi * jariJari;
}

console.log(luasLingkaran);
console.log(kelilingLingkaran);
