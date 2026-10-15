## Membuat algoritma menghitung luas dan keliling lingkaran

### Deskriptif

1. Mulai
2. Input/masukkan jari-jari lingkaran yang ingin dihitung
3. Jika jari-jari lingkaran merupakan kelipatan 7
4. maka phi (π) sama dengan 22/7
5. Jika jari-jari lingkaran bukan merupakan kelipatan 7
6. maka phi (π) sama dengan 3.14
7. Hitung luas lingkaran dengan rumus 3.14 dikali jari-jari dikali jari-jari
8. Hitung keliling lingkaran dengan rumus 2 dikali 3.14 dikali jari-jari
9. Tampilkan hasil luas lingkaran
10. Tampilkan keliling lingkaran
11. Selesai

### Flowchart

```mermaid
flowchart LR
  A@{shape: start, label: "Start"}
  B@{shape: stop, label: "End"}
  C@{shape: diam, label: "jariJari % 7 == 0"}
  D@{shape: lean-r, label: "jariJari"}
  E@{shape: lean-r, label: "luasLingkaran"}
  J@{shape: lean-r, label: "kelilingLingkaran"}
  F@{shape: rect, label: "luasLingkaran = phi x jariJari x jariJari"}
  G@{shape: rect, label: "kelilingLingkaran = 2 x phi x jariJari"}
  H@{shape: rect, label: "phi = 22/7"}
  I@{shape: rect, label: "phi = 3.14"}

  A --> D --> C --iya--> H
  C --tidak--> I
  H & I --> F --> G --> E --> J --> B

```

### Pseudocode

```
DECLARE jariJari : INTEGER
DECLARE phi : REAL
DECLARE luasLingkaran : REAL
DECLARE kelilingLingkaran : REAL

INPUT jariJari

IF jariJari MOD 7 = 0 THEN
  phi <- 22/7
ELSE
  phi <- 3.14
ENDIF

luasLingkaran <- phi * jariJari * jariJari
kelilingLingkaran <- 2 * phi * jariJari

OUTPUT luasLingkaran
OUTPUT kelilingLingkaran
```

#### Penjelasan method

- Jika ingin menghitung luas lingkaran panggil method 'circle.luas()'
- Jika ingin menghitung keliling lingkaran panggil method 'circle.keliling()'
- Jika ingin merubah jari-jari menggunakan 'circle.jariJari'.

#### Penjelasan callback function

- Untuk mengetahui hasil perhitungan luas dan keliling lingkaran, panggil function hitung(phi, 10, hasil) dan sertakan jari-jari lingkaran yang ingin dihitung.
- Kemudian parameter tersebut akan
