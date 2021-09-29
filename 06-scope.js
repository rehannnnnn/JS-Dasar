/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/* 
ada 2 variable scope pada javascript, yaitu;
1. Global Scope
2. Local Scope
*/
/*
1. Global Scope
    berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file dan agar menjadi Global Scope, suatu variable
    harus dideklarasikan diluar blocks.
2. Local Scope
    berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping. Maka variabel hanya bisa diakses
    didalam blocks saja. Tidak bisa diakses diluar blocks.
*/
// implementasi tiap variabel scope, Global Scope
let namaSaya = 'Raihan'; // variabel namaSaya dideklarasikan secara global scope
function greeting() {
    return namaSaya;
}

console.log(namaSaya);
// implementasi tiap variabel scope, Local Scope
function greeting() {
    let namaSaya = 'Raihan'; // variabel namaSaya dideklarasikan secara Local Scope
    return namaSaya;
}

console.log(greeting())

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
/*
Mariah
*/
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
