/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000
function totalPengeluaran(gundam, makan, kost, subscription) {
    return gundam + makan + kost + subscription;
}
console.log(totalPengeluaran(750000, 2000000, 1000000, 250000))


/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok = 500000
/// gajiLembur = 5% dari gajiPokok= 250000
function totalGaji(gajiPokok, gajiBonus, gajiLembur) {
    return gajiPokok + gajiBonus + gajiLembur;
}
console.log(totalGaji(5000000, 500000, 250000))

/// Sisa Gaji
const sisaGaji = 5750000 - 4000000

console.log(sisaGaji)

/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = "1" == 1;

console.log(isSame)

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = 75 >= 80;

console.log(isHigher)

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = "1" === 1;

console.log(final)
