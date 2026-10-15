const circle = {
  jariJari: 10,
  phi: function () {
    if (this.jariJari % 7 === 0) {
      return 22 / 7;
    } else {
      return 3.14;
    }
  },
  luas: function () {
    return this.phi() * this.jariJari * this.jariJari;
  },
  keliling: function () {
    return 2 * this.phi() * this.jariJari;
  },
};

const luas = circle.luas();
const keliling = circle.keliling();

console.log(`Luas: ${luas}, Keliling: ${keliling}`);
